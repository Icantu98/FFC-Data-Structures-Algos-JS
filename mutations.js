function mutation(arr) {
    let pool = arr[0].toLowerCase().split('').sort();
    let test = arr[1].toLowerCase().split('').sort();
    pool = [...new Set(pool)];
    test = [...new Set(pool)];
    console.log('Pool: '+ pool)
    console.log('Test: ' +test)
    // Step 1 sort aphabetically and see if they match
  }
  
  
  console.log(mutation(["hello", "hey"])) // false
  console.log(mutation(["hello", "Hello"])) // true
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) //true