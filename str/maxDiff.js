



function maxDifference(a) {
  let res = -1;
  for (let i = 1; i < a.length; i++) {
    for (let j = 0; j < i; j++) {
        if (a[j] < a[i] && (a[i] - a[j]) > res) {
            res = a[i] - a[j]
        } 
    }
  }
  return res;
}

function maxDifference(a) {
    let res = -1;
    let min = Number.POSITIVE_INFINITY;
    let mins = [];
    for (let i = 0; i < a.length; i++) {
      mins.push(Number.POSITIVE_INFINITY)
    }
    console.log(mins)
    for (let i = 0; i < a.length; i++) {
      if (a[i] < mins[i]) {
        mins[i] = a[i]
      }
      if (i !== 0 && a[i] > a[i - 1]) {
        mins[i] = mins[i - 1]
      }
    }
    console.log(mins)
    for (let i = 1; i < a.length; i++) {
      if ( a[i] - mins[i - 1] > res) {
        res = a[i] - mins[ i - 1]
      }
    }
    return res;
  }




  function maxDifference3(a) {
  
    if (a === undefined || a.length === 1 || a.length === 0) return -1;
    let res = a[1] - a[0];
    let min = a[0];
    for (let i = 1; i < a.length; i++) {
      if (a[i] - min > res) {
        res = a[i] - min
      }
      if (a[i] < min) {
        min = a[i]
      }
    }
    if (res < 0) return -1
    // if (a[1] < a[0] && min === a[0]) return -1;
    return res;
  }
  // console.log(maxDifference3([10 ,11, 4, 3, 1]))
  console.log(maxDifference3([5, 3, 1]))