function mutation(arr) {
  let pool = arr[0].toLowerCase();
  let test = arr[1].toLowerCase();
  for (let i = 0; i < test.length; i++){
    if (pool.indexOf(test[i]) < 0){
        return false
    }
  }
  return true
}


console.log(mutation(["hello", "hey"])) // false
console.log(mutation(["hello", "Hello"])) // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) //true
