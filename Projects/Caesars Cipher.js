function rot13(str) {
	let splitStr = str.split(' ')
	let result = ''
	for (let i = 0; i < splitStr.length; i++){
		for(let j = 0; j < splitStr[i].length; j ++){
			let charcode = (splitStr[i][j].charCodeAt()) + 13;
			result += String.fromCharCode(charcode)
		}
	}
	// result = String.fromCharCode(str.charCodeAt(0) + 13)
	return result;
  }
  
  console.log(rot13("SERR PBQR PNZC"))

  /* 
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
  */