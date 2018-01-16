

// without using dyn prog - recursive

let fib = (i) => {
    if ((i === 0) || (i === 1) ) return 1;

    return fib(i - 1) + fib(i - 2)
}

// without using recursion

let fib2 = (i) => {
    if ((i === 0) || i ===1) return 1;
    let prev = 0;
    let cur = 1;
    let x = 1;
    let fibo = 0;
    while (x <= i) {
        fibo = prev + cur;
        prev = cur;
        cur = fibo
        x++
    }
    return fibo
}

// using memoization 

let fib3 = (i) => {
    const lookUpTab = [1, 1]
    const fib3Helper = (k) => {
        if (lookUpTab[k] === undefined) {
            lookUpTab[k] = fib3Helper(k - 1) + fib3Helper(k - 2);
            
        } 
        return lookUpTab[k]
    }
    fib3Helper(i)
    return lookUpTab[i]
}
console.log(fib3(4))