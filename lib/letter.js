'use strict';

let n = 0;

let letterObj = {
  letterer: ()  => {

    let letter = 'A';
    
    n++;
    
    if(n <= 26){
      letter = String.fromCharCode(65+n);
    } 
    
    if(n === 27){ 
      n=-1; 
    } 

    return letter;
  },
};

module.exports = letterObj;