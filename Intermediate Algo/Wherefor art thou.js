function whatIsInAName(collection, source) {
    let arr = []
    for (let i = 0; i < collection.length; i++){
        if (collection[i].last == source.last){
            arr.push(collection[i])
        }else{
            arr.push(false)
        }
    }
    return arr
}
console.log(JSON.stringify(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })))
console.log(JSON.stringify([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
console.log(JSON.stringify(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })))
  
/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
  */ 

// Someones answer to the problem
/*
function whatIsInAName (collection, source) {
    return collection.filter(function (colObj) {
      let b = 0
      let c = 0
      for (let srcProp in source) {
        b++
        for (let colObjProp in colObj) {
          if (colObj[colObjProp] === source[srcProp] && colObjProp === srcProp) {
            c++
          }
        }
      }
      return (b === c)
    })
  }
  */