/* 
  Example:
  var input = {
    one: {
      two: {
        three: 0
      }
    }
  }
  var result = get(input, "one.two.three");
  // result is 0
  var result2 = get(input, "one.two");
  // result2 is { three: "hello" }
  var noResult = get(input, "one.three.two");
  // noResult is null
*/

function get(obj, path) {
    var solution = obj;
    const pathArr = path.split('.');
    for (let i = 0 ; i < pathArr.length; i++) {
      solution = solution[pathArr[i]];
      if (solution === undefined) 
        return null;
    }
    return solution;
}

/*
  Example:
    Input:
      {
        "launchpad": {
          "header": {
            "header_text": "Welcome to ClassDojo!",
            "header_subtext": "Have a great day.",
          }
        },
        "user_profile_modal": {
          "header": "Edit User Profile",
        },
        "2015_tour": {
          "introduction": "Welcome to ClassDojo 2015!"
        }
      }
    App code:
      [... some code ...]
      translate("launchpad.header.header_text")
      [... some code ...]
      translate("user_profile_modal.header")
      [... some code ...]
    Output:
      {} // ["launchpad", "header", "header_text"]
      {"launchpad": {"header": {"header_text": "some string"}}}
      {
        "launchpad": {
          "header": {
            "header_text": "Welcome to ClassDojo!",
          }
        },
        "user_profile_modal": {
          "header": "Edit User Profile",
        }
      }
*/

function stripUnusedJSON (translations, code) {

    // parse through code, collect paths
    const paths = parsePaths(code);
    
    
    // create obj, populate it with keys from the path, use get to fill with values
    const solution = {}
    
    // loop through the paths
    for(let j = 0 ; j < paths.length; j++) {
       let midSolution = solution;
       let curPath = pathsArr[j];
       let pathArr = curPath.split('.');
      // for each part in path - nreak the paths to sections - reverse  - ["launchpad", "header", "header_text"]
      for (let i = 0 ; i < pathArr.length; i++) {
         if (i === arr.length - 1) {
            midSolution[arr[i]] = get(curPath);
         } else if (midSolution[arr[i]] === undefined) {
           midSolution[arr[i]] = {};
         } 
         midSolution = midSolution[arr[i]];
      }
    return solution;
  }}