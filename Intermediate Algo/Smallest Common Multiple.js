function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b) // sorts args to get range correctly 
  const numberDivisors = max - min + 1
    // I do NOT understand the point of this block
  let upperBound = 1
    for(let i = min; i <=max; i++){
      upperBound *= i
    }
    // IDK how this FOR block works
    // Test all multiples of 'max'
    for(let multiple = max; multiple <= upperBound; multiple += max) {
      let divisorCount = 0;
      for(let i = min; i <= max; i++){
        if (multiple %i === 0){
          divisorCount += 1
        }
      }
      if (divisorCount === numberDivisors){
        return multiple
      }
    }
  }
  
  console.log(smallestCommons([1,5]))
  console.log(smallestCommons([7,5]))
  console.log(smallestCommons([2,10]))
  console.log(smallestCommons([1,13]))

  /* 
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */