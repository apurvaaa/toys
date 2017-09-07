// assuming we have a is-substring method, write code to check if str2 is a rotated str1.

const isItRotated = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  if (str2.length === 2 && (str2 === str1 || str2.split('').reverse().join('') === str1)) {
    return true;
  }

  let low = 0;
  let high = str2.length - 1;
  let mid;
  while ((high - low) > 2) {
    mid = low + Math.floor((high - low) / 2);

    if (is_substr(str2.slice(low,mid+1), str1) && !is_substr(str2.slice(mid, high+1), str1)) {
      low = mid;
    } else if (!is_substr(str2.slice(low,mid+1), str1) && is_substr(str2.slice(mid, high+1), str1)) {
      high = mid;
    } else if (!is_substr(str2.slice(low,mid+1), str1) && !is_substr(str2.slice(mid, high+1), str1)) {
      return false;
    } else if (is-substr(str2.slice(low,mid+1), str1) && is_substr(str2.slice(mid, high+1), str1)) {
      // the start of str1 is anywhere between low and high
      let x = 0;
      while (!is_substr(str2.slice(low, high+1), str1)){
        low++;
      }
      if (confirm(str1, str2, low)) {
        return true;
      } else false;
    }
  }
  if (confirm(str1, str2, low + 1)) {
    return true;
  } else false;
}

const confirm = (str1, str2, start) => {
  if (is_subStr(str2.slice(start) + str2.slice(0, start), str1)) {
    return true;
  } else {
    return false;
  }
}