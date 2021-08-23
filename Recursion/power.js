const power1 = (n, k) => {
  if (k === 0) return 1;
  return n * power1(n, k-1)
}

const power2 = (n, k) => {
  if (k === 0 || k === 1 ) return n;
  
  let num = 0;
  if (k % 2 === 0) {
    num = power2(n, k/2);
    return num * num
  } else {
    num = power2(n, (k - 1)/2);
    return n * num * num
  }
}

console.log(power1(2,3));
console.log(power1(3,3));

console.log(power2(2,3));
console.log(power2(3,3));