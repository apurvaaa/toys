//pseudocode: 

function flattenDictionary(dict):
    flatDictionary = {}
    flattenDictionaryHelper("", dict, flatDictionary)

    return flatDictionary


function flattenDictionaryHelper(initialKey, dict, flatDictionary):
    for (key : dict.keyset()):
        value = dict.get(key)

        if (!isDictionary(value)): # the value is of a primitive type
            if (initialKey == null || initialKey == ""):
                flatDictionary.put(key, value)
            else:
                flatDictionary.put(initialKey + "." + key, value)
        else:
            if (initialKey == null || initialKey == "")
                flattenDictionaryHelper(key, value, flatDictionary)
            else:
                flattenDictionaryHelper(initialKey + "." + key, value, flatDictionary)

//solution :



function flattenDictionary(dict) {
    var flatDict = {};
    // loop through the keys
    for (var key in dict) {
      //access the value
        // if the value is an object
      // instance of or type of ?
      //console.log('value: ', dict[key])
      //console.log('type of value: ', typeof dict[key])
      if (typeof dict[key] === 'object') {
        //console.log('type of was object: ', dict[key])
          // self call flattenDictionary with value as parameter
        var subDict = flattenDictionary(dict[key]);
        var newKey;
        for (var subKey in subDict) {
           newKey = key + '.' + subKey;
           flatDict[newKey] = subDict[subKey];
        }
      } else {
        //console.log('type of was not object: ', dict[key])
        flatDict[key] = dict[key];
      }
    }
      
    return flatDict;
  }
  
  dict = {
              Key1: 1,
              Key2: {
                  a: 2,
                  b: 3,
                  c: {
                      d: 3,
                      e: 1
                  }
              },
             Key3: 4,
             Key4: {a: 7}
          };
  
     
  console.log(JSON.stringify(flattenDictionary(dict)));
         
  //Dictionary<string, int> statistics;
  
  //statistics["Foo"] = 10;
  //statistics["Goo"] = statistics["Goo"] + 1;
  //statistics.Add("Zoo", 1);