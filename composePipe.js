/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 * 
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';
//TODO

var compose = function(...args) {
  const args2 = args.reverse();
  
  return (function (inputVal) {
    let remainder = inputVal;
    // console.log(remainder);
    for (let val of args2) {
      remainder = val(remainder);
      // console.log(remainder);
    }
    return remainder;
  });
};

var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}
var welcome = compose(greet, exclaim);
console.log(welcome('phillip')); // 'hi: PHILLIP!'

var pipe = function(...args) {

  return (function (inputVal) {
    let remainder = inputVal;
    // console.log(remainder);

    for (let val of args) {
      remainder = val(remainder);
      // console.log(remainder);
    }
    return remainder;
  });
};

var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }
console.log(pipe(add2, multiplyBy3)(5)) // 21
console.log(pipe(add2, multiplyBy3, multiplyBy3)(5)) // 63