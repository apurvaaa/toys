/*
* Make an array method that can return whether or not a context array is a
* subset of an input array.  To simplify the problem, you can assume that neither
* array will contain objects or arrays as elements within them.
*
* 
* var a = ['commit','push']
* a.isSubsetOf(['commit','rebase','push','blame']) // true
*
* NOTE: You should disregard duplicates in the set.
*
* var b = ['merge','reset','reset']
*
* b.isSubsetOf(['reset','merge','add','commit']) // true 
*
* See http://en.wikipedia.org/wiki/Subset for more on the definition of a
* subset.
*/

/*
* Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
TODO:
*/

Array.prototype.isSubsetOf1 = function (arr) {
  const hash = {};
  for (let val1 of this) {
    if (hash[val1] === undefined) {
      hash[val1] = true;
    }
  }
  for (let val2 of arr) {
    if (!hash[val2]) {
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true;
};

[1,2,3].isSubsetOf1([1,1,3,4]);
// solution :
/*
Array.prototype.isSubsetOf = function (arr) {
  // your code here

  var objectify = function (arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    return obj;
  };
  // transform `arr` to be an object `obj` for speed
  var obj = objectify(arr);
  // for each element in `this`
  for (var i = 0; i < this.length; i++) {
    // if element is not in `obj` return false
    if (obj[this[i]] === undefined) { return false; }
  }
  // assuming we’ve completed the for loop return true
  return true;
  }; */