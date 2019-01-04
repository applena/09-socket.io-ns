'use strict';

let count = 0;

let counterObj = {
  counter: () => {
    return count++;
  },
};

module.exports = counterObj;