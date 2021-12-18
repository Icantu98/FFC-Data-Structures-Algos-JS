function add(x) {
  // Only change code below this line
  const curried = x => y => z => x+y+z
  return curried
  // Only change code above this line
}

console.log(add(10)(20)(30))