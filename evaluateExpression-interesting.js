// implement eval
// input: "2 + 3 * ( 8 / 2 - 1 + ( 6 / 3 ) )"
// output: 17

var mocha =  require('mocha');
var chai = require('chai');

var calculate = function(expression) {
  // create a operator priority obj, num stack, op  stack 
  const opPriority = {
    '+' : 1,
    '-' : 1,
    '*' : 2,
    '/' : 2
  };
  const numStack = [];
  const opStack = [];

  // loop through the expression
  let i = -1;
  while (i < expression.length) {
    i++;
    let curChar = expression[i];
    // if number, add to num stack
    if ('()+-*/'.indexOf(curChar) < 0) {
      numStack.push(curChar);
    }
    // if operator,
    else {
      // if '(', push it to op stack
      if (curChar === '(') opStack.push(curChar);
      // if ')', 
      else if (curChar === ')') {
        // loop through till we reach '(' in op stack, use flag
        let reached = false;
        while (!reached){
          // pop one op from op stack, 2 nums from num stack, evaluate and push to num stack
          let operator = opStack.pop();
          if (operator !== '(') {
            let a = numStack.pop();
            let b = numStack.pop();
            let val = simpleEval(a, b, operator);
            numStack.push(val);
          } else {
              reached = true;
          }
        }
      }
      // else if operator, loop : if priority of op is <= that which is already on top of stack, 
      else {
        // is operator +, -, *, /
          //priority of op is <= that which is already on top of stack
        while (opStack.length !== 0 && opPriority[curChar] <= opPriority[opStack[opStack.length - 1]]) {
          // pop 2 numbers, 1 op -> evaluate and push value to num stack
          let a = numStack.pop();
          let b = numStack.pop();
          let op = opStack.pop();
          numStack.push(simpleEval(a, b, op));
        }
        opStack.push(curChar);
      }
    }
  }
  
  // after looping through input, if op stack not empty, loop: pop one from op stackand 2 from num stack
  while (opStack.length !== 0) {
    let a = numStack.pop();
    let b = numStack.pop();
    let op = opStack.pop();
    numStack.push(simpleEval(a, b, op));
  }
  //get evaluated value from num stack
  return numStack.pop();
}

const simpleEval = function (a, b, operator) {
  let val;
  if (operator === '+') {
    val = parseFloat(a) + parsefloat(b);
  }
  else if (operator === '-') {
      val = parseFloat(a) - parseFloat(b);
  }
  else if (operator === '*') {
      val = parseFloat(a) * parseFloat(b);
  }
  else {
      val = parseFloat(b) / parseFloat(a);
  }     
  return val;
}

describe('evalTest', function() {

})

calculate();