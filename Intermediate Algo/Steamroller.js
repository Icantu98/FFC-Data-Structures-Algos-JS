function steamrollArray(arr) {
    let result = [].concat(...arr)
    return result.some(Array.isArray) ? steamrollArray(result) : result // I need help understanding this
  }
  
  console.log(JSON.stringify(steamrollArray([1, [2], [3, [[4]]]])))
  console.log(JSON.stringify(steamrollArray([1, [], [3, [[4]]]])))
  console.log(JSON.stringify(steamrollArray([1, {}, [3, [[4]]]])))

  /* 
  Flatten a nested array. You must account for varying levels of nesting.
  */