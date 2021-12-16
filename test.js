function nonMutatingSplice(cities) {
  // Only change code below this line
  let newArray
  newArray = cities.slice(0,3)
  return newArray
  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities))