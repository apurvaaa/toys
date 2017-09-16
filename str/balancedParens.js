//works!
/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

 const balancedParens = (string) => {
  const first = '([{';
  const second = ')}]';
  const hash = {
    '{':'}',
    '(':')',
    '[':']'
  }
  const bracketTracker =[];
  for (let i = 0; i < string.length; i++) {
    if (first.includes(string[i])) {
      bracketTracker.push(string[i]);
    }
    else if (second.includes(string[i])) {
      if (bracketTracker.length > 0 && (hash[bracketTracker[bracketTracker.length - 1]] === string[i])) {
        bracketTracker.pop();
      } else {
        return false;
      }
    }
  }
  if (bracketTracker.length !== 0) {
    return false;
  } else {
    return true;
  }
 }
