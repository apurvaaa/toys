const towerOfBrahmaPrint = (n, src = '1', dst = '2', aux = '3') => {
  if (n === 1) {
    console.log(`Move disk from ${src} to ${dst}`);
  } else {
    towerOfBrahmaPrint(n-1, src, aux, dst);
    console.log(`Move disk from ${src} to ${dst}`);
    towerOfBrahmaPrint(n-1, aux, dst, src);
    
  }
}

// run in console
// towerOfBrahmaPrint(1);
// towerOfBrahmaPrint(2);
// towerOfBrahmaPrint(3);
// towerOfBrahmaPrint(8);