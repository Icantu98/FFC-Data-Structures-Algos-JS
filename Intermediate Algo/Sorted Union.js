function uniteUnique(arr) {
    let arrays = Object.values(arguments) // get out all of the arrays from input since only the first one was outputing
    let arraysCon = arrays[0].concat(arrays[1]).concat(arrays[2])
    results = [] // array to push numbers to
    arrays.filter(nums => nums != nums) // Thinking of using a filter to take out numbers that have already be used
    
    result = arraysCon
    return result;
  }
  
  console.log(JSON.stringify(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])))
  console.log(JSON.stringify(uniteUnique([1, 2, 3], [5, 2, 1])))
  console.log(JSON.stringify(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])))

  /*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
  */