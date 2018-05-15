const cubeSum = (n) => {
    // create array of cubes
    let cubes = [], cube = 1, i = 1;
    while (cube < n) {
      cubes.push(i)
      cube = Math.pow(i, 3)
      i++
    }
    // console.log(cubes)
    // find all possible sums of 2 numbers from the array
    let hash ={}
    for (let j = 0; j < cubes.length; j++) {
      for (let k = j + 1; k < cubes.length; k++) {
        if (j !== k) {
          // console.log(j, k)
          let key = (Math.pow(cubes[j], 3)+Math.pow(cubes[k],3)).toString()
          if (hash[key] === undefined) {
            hash[key] = [0]
          }
          hash[key][0]++
          hash[key].push(cubes[j])
          hash[key].push(cubes[k])
        }
      }
    }
    // console.log(hash)
    
    // filter the keys in hash
    const filtr = (h) => {
      for (let j in h) {
        if (j <= n && h[j][0] > 1) {
          console.log(j + ',(' + h[j][1] +','+ h[j][2] +'),('+ h[j][3] +','+ h[j][4]+')')
        }
      }
    }
    filtr(hash)
  }
//   console.log( '-----')

// cubeSum(10000000)

// palindrome :

function palindrome(word) {
    let first, second;
    
    if (word.length % 2 === 0) {
      first = word.length / 2 - 1
      second = word.length / 2
      
    } else {
      first = Math.floor(word.length / 2) - 1
      second = Math.floor(word.length / 2) + 1
      console.log(first, second)
    }
    
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
      if (word[first] !== word[second]) {
        return 'N'
      }
      first--;
      second++;
    }
    return 'Y'
  }

//   console.log(palindrome(''))


function fly(commands) {
    // if (commands.length === 0) {
    //   console.log('euclidean distance: 0')
    // }
    let arr = commands.split(' '), i =0;
    let x = 0, y =0;
    console.log('('+ x +','+ y +')')
    while (i < arr.length) {

      if (arr[i] === 'N') {
        y++
      } else if (arr[i] === 'S') {
        y--
      } else if (arr[i] === 'E') {
        x++
      } else if (arr[i] === 'W') {
        x--
      }
      i++
      console.log('('+ x +','+ y +')')
    }

    //finding distance and trncating, (not rounding off)
    let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    let parts = dist.toString().split('.')
    if (parts[1] !== undefined && parts[1].length > 2) {
      parts[1] = parts[1].slice(0,2)
    }
    console.log('euclidean distance: ' + parts.join('.'))
  

}

fly('')