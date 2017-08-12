//does input string have all unique charecters?

const isUnique = (str) => {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]] !== undefined) {
      return false;
    }
    hash[str[i]] = true;
  }
  return true;
}