function palindrome(str) {
	let array1 = str.toLowerCase() // clean data
	let array2 = [] // for reversed string
//   make a .push for loop after you clean the data. then check it against the original clean compressed string. then output true/false


	return array1; // for debuging

	// reverse string loop
	for (let i = 0; i < array1.length; i++){
		array2.unshift(array1[i])
	}
	// Check if arr1 and arr2 are the same.
	if (array1 == array2){
		return true
	}else{
		return false
	}

  }
  
  console.log(palindrome("eye"))
  console.log(palindrome("_eye"))
  console.log(palindrome("race car"))
  console.log(palindrome("not a palindrome"))
  console.log(palindrome("A man, a plan, a canal. Panama"))
  console.log(palindrome("0_0 (: /-\ :) 0-0"))
  console.log(palindrome("five|\_/|four"))