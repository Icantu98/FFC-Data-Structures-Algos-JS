function spinalCase(str) {
    str = str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase()
    return str
  }
  
  console.log(spinalCase('This Is Spinal Tap'))
  console.log(spinalCase("thisIsSpinalTap"))
  console.log(spinalCase("The_Andy_Griffith_Show"))
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/