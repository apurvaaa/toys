// i : string - 'aabbbbcddooop'
// o : 'a2b4c1d2o3p1'
// c : string has only lower and upper case chars
// e : if compressed string is bigger than original, return original

const compressString = (string) => {
  let compressed = '';
  let curChar = string[0];
  let count = 0;
  for (i = 0; i <= string.length; i++) {
    if (curChar === string.charAt(i)) {
      count++;
    } else {
      compressed += curChar + count.toString();
      count = 1;
      curChar = string.charAt(i);
    }
  }
  if (compressed.length > string.length) return string;
  return compressed;
}