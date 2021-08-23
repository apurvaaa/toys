const fibonacci1 = (n, fib0 = 0, fib1 = 1) => {
  if (n === 0 || n === 1) return n;

  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

const fibonacci2 = (n, fib0 = 0, fib1 = 1) => {
  if (n === 1) return fib1;
  return fibonacci2(n - 1, fib1, fib0 + fib1);
}

console.log(fibonacci1(3));
console.log(fibonacci1(5));
console.log(fibonacci1(1));

console.log(fibonacci2(3));
console.log(fibonacci2(5));
console.log(fibonacci2(1));
