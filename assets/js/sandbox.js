//замыкание
"use strict";

function createCounter(n){
  let suma = n; 
  return
    function adder (m) {
     let m;
      return suma += m;
    }
  }
const adder = createCounter(10);
console.log(adder(5));
