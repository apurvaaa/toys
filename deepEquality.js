/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
  var deepEquals = function(apple, orange) {
    const keys1 = Object.keys(apple);
    const keys2 = Object.keys(orange);
    if (keys1.length !== keys2.length) {
      // console.log('1')
      return false;
    }
    for (let key of keys1) {
      if (orange[key] === undefined) {
        // console.log('2');
        return false;
      }
      if (typeof apple[key] ===  typeof orange[key]) {
        if (typeof apple[key] === 'object') {
          let subSol =  deepEquals(apple[key], orange[key]);
          if (!subSol) {
            // console.log('3');
            return false;
          }
        } else {
          if (apple[key] !== orange[key]) {
            // console.log('4');
            return false;
          }
        }
      } else {
        // console.log('5');
        return false;
      }
    }
    return true;
  };

  console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
  console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false