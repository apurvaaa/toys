// input: 2 strings
// output: true if one is permutation of the other. else, false
// constraints: -
// exceptions: -

const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const hash = {};
  for (let i = 0; i < str1.length; i++) {
    if (hash[str1[i]] === undefined ){
      hash[str1[i]] = 1;
    } else {
      hash[str1[i]]++;
    }
    if (hash[str2[i]] === undefined) {
      hash[str2[i]] = -1;
    } else {
      hash[str2[i]]--;
    }
  }

  for (key in hash) {
    if (hash[key] !== 0) {
      return false;
    }
  }
  return true;
}