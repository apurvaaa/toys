/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(mainFunc, obj, ...args
) {
  return function(...args2) {
    if (obj !== null) {
      const newObj = Object.create(obj);
      newObj._func = mainFunc; 
      newObj._func();
    } else {
      return mainFunc(...args, ...args2);     // <-------- important step
    }
  }
};

//tests

var alice = {
  name: 'alice',
  shout: function(){
  console.log(this.name);
   }
  }
 var boundShout = bind(alice.shout, alice);
 boundShout(); // alerts 'alice'
 boundShout = bind(alice.shout, {name: 'bob'});
 boundShout(); // alerts 'bob'

 var func = function(a, b){ return a + b };
 var boundFunc = bind(func, null, 'foo');
 var result = boundFunc('bar');
 console.log(result); // === 'foobar'); // true

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(obj, ...args1
) {
  const funcToSave = this;         // <----------   important step
  return function(...args2) {
    if (obj !== null) {
      const newObj = Object.create(obj);
      newObj._func = funcToSave;
      newObj._func();
    } else {
      return funcToSave(...args1, ...args2);
    }
  }
};

var boundShout = alice.shout.bind(alice);
boundShout(); // alerts 'alice'
boundShout = alice.shout.bind({name: 'bob'});
boundShout(); // alerts 'bob'

var func = function(a, b){ return a + b };
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
console.log(result); // === 'foobar'; // true




// solution given :

/*
var bind = function(func, context) {

  var previousArgs = Array.prototype.slice.call(arguments, 2);

  return function() {
    var args = Array.prototype.slice.call(arguments);
    args = previousArgs.concat(args);

    return func.apply(context, args);
  };
  };



  Function.prototype.bind = function( context ) {
  
    var previousArgs = Array.prototype.slice.call(arguments, 1);
    var func = this;
  
    return function() {
      var args = Array.prototype.slice.call(arguments);
      args = previousArgs.concat(args);
  
      return func.apply(context, args);
    };
    };
*/
