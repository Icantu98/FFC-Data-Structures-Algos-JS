function palindrome(str) {
	// trying to make callback function for filter.
	function cleanStr(x){
		x = [x]
	}
	let array1 = str.filter(char => ) // clean data
	let array2 = [] // for reversed string
//   make a .push for loop after you clean the data. then check it against the original clean compressed string. then output true/false


	return array1; // for debuging

	// reverse string loop
	for (let i = 0; i < array1.length; i++){
		array2.unshift(array1[i])
	}
	array2 = array2.join('') // turns array into string
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


  /* 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
  */