function translatePigLatin(str) {
    // create variables to use
    let vowel = /[aeiou]/gi
    let result = ''

    // Check if first char in str is a vowel
    if (str[0].match(vowel)){
        result = str + 'way';
    } 
    // Check if the str has NO vowels
    else if(str.match(vowel) === null){
        result = str + 'ay';
    }else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(vowel)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    result = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }
    return result;
}
 

  
  console.log(translatePigLatin("consonant"))
  console.log(translatePigLatin("california"))
