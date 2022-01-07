function telephoneCheck(str) {
	let cleaner = /[a-z\s_,\.\:\-\/\|\*\&\!\#]|/g
	let result = str.replace(cleaner, '')
	// return result
	if (result.length > 10){ 
		if(result.length == 11){
			if (result[0] == 1){
				return true
			}else{
				return false
			}
		}else if (result.length ==12){
			if (result.charCodeAt(0) == 40 && result.charCodeAt(4) == 41){
				return true
			}else{
				return false
			}
		}else if (result.length == 13){
			// if(result.charCodeAt(1) == 40){}
			return true
		}else{
			return false
		}
	}else if (result.length == 10){
		return true
	}else{
		return false
	}
  }
  
  console.log(telephoneCheck("555-555-5555")) 		// TRUE
  console.log(telephoneCheck("1 555-555-5555")) 	// TRUE
  console.log(telephoneCheck("1 (555) 555-5555")) 	// TRUE
  console.log(telephoneCheck("5555555555")) 		// TRUE
  console.log(telephoneCheck("(555)555-5555")) 		// TRUE
  console.log(telephoneCheck("555-5555")) 			// FALSE
  console.log(telephoneCheck("1 555)555-5555")) 	// FALSE
  console.log(telephoneCheck("123**&!!asdf#"))		// FALSE

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