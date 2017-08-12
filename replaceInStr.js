//input: a string
//output: a string with spaces replaced by %20
//constraints: preferably in place
//exceptions: a string with just a space? => ''

const replaceForURL1 = (str) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      newStr += '%20';
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

const replaceForURL = (str) => {
  let newStrArr = str.split(' ');
  return newStrArr.join('%20');
}