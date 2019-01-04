'use strict';

const letterer = require('../lib/letter');
const numberer = require('../lib/number');
const numberSpy = jest.spyOn(numberer, 'counter');
const letterSpy = jest.spyOn(letterer, 'letterer');

describe('it runs a server that listens to two namespace events and emits an increased counter and letter', () => {
  it('it increments a counter when numberer is called', () => {
    numberer.counter();
    expect(numberSpy).toHaveBeenCalled();
  });
  
  it('increments an letter value when letterer is called', () => {
    letterer.letterer();
    expect(letterSpy).toHaveBeenCalled();
  });

  it('increments a number count', () => {
    let counter = numberer.counter();
    expect(counter).toEqual(1);
  });

  it('increments a letter', () => {
    let letter = letterer.letterer();
    expect(letter).toEqual('C');
  });
});