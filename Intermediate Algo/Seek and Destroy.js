function destroyer(arr) {
    let args2Kill = Object.values(arguments) // pulls all args from function
    args2Kill.shift() // This is what we are hunting for
    return arr.concat(args2Kill).filter(item => !arr.includes(item) || !args2Kill.includes(item))
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/