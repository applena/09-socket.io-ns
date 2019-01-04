'use strict';

const io = require('socket.io')(3000);

const counter = require('./lib/number');
const letterer = require('./lib/letter');

//on default connection
io.on('connect', (socket) => {
  socket.on('hi', payload => {
    socket.emit('greet', payload);
  });
});

const numbers = io.of('/numbers');
const letters = io.of('/letters');

numbers.on('connection', (socket) => {
  console.log('connect', socket.id);
  socket.on('join', (room, cb) => {
    console.log('join', room);
    socket.join(room);
    cb && cb(`joined ${room}`);
  });

  socket.on('next-number', () => {
    let count = counter.counter();
    console.log('sending negative',(count*-1));
    socket.broadcast.emit('_number', (count*-1));
    socket.broadcast.emit('number', count);
  });


});

letters.on('connection', (socket) => {
  console.log('connect', socket.id);

  socket.on('join', (room, cb) => {
    socket.join(room);
    cb && cb(`joined ${room}`);
  });

  socket.on('next-letter', () => {
    let letter = letterer.letterer();
    socket.broadcast.emit('_letter', letter.toLocaleLowerCase());
    socket.broadcast.emit('letter', letter );
  });
});