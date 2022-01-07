function telephoneCheck(str) {
	if(str[0] == '-'){ // special case
		return false
	}

	// Clean data of any extra characters
	let cleaner = /[a-z\s_,\.\:\-\/\|\*\&\!\#]|/g
	let result = str.replace(cleaner, '')
	// return result.length // for testing

	// Check for at least 10 numbers in str
	if (result.length > 10){ // if the str has at least 10 numbers check through it
		if(result.length == 11){
			// Checking for correct country code
			if (result[0] == 1){
				return true
			}
			return false
		}else if (result.length ==12){
			// Checking that () are in the correct place if they exist
			if (result.charCodeAt(0) == 40 && result.charCodeAt(4) == 41){
				return true
			}else{
				return false
			}
		}else if (result.length == 13){
			// Checking for correct country code when () exists
			if(result.charCodeAt(0) == 49){
				return true
			}
			return false
		}
		return false
	}else if (result.length == 10){
		let dashes
		// testing for correct number of dashes
		try{
			dashes = str.match(/-/g).length
		}catch{
			dashes = 0
		}
		// checks for too many dashes
		if(dashes > 2){
			return false
		}
		return true
	}
	return false
  }
  
  console.log(telephoneCheck("555-555-5555")) 		// TRUE
  console.log(telephoneCheck("1 555-555-5555")) 	// TRUE
  console.log(telephoneCheck("1 (555) 555-5555")) 	// TRUE
  console.log(telephoneCheck("5555555555")) 		// TRUE
  console.log(telephoneCheck("(555)555-5555")) 		// TRUE
  console.log(telephoneCheck("555-5555")) 			// FALSE
  console.log(telephoneCheck("1 555)555-5555")) 	// FALSE
  console.log(telephoneCheck("123**&!!asdf#"))		// FALSE
  console.log(telephoneCheck("2(757)6227382"))		// FALSE
  console.log(telephoneCheck("55 55-55-555-5"))		// FALSE
  /* 
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.
  */