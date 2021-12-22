function fearNotLetter(str) {
// loop through ASCII values of string list
    for(let i = 0; i < str.length; i++){
        // get ASCII code for each character in str
        var code = str.charCodeAt(i)
        // if ASCII code is not equal to first character + no itteration then the character escaped
        if (code !== str.charCodeAt(0) + i){
            // if character did escape sub 1 from current code and find missing letter
            return String.fromCharCode(code-1)
        }
    }
    return undefined;
}
  
 console.log(fearNotLetter("abce"))
// console.log(fearNotLetter("abcdefghjklmno"))
// console.log(fearNotLetter("stvwx"))
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))
  /*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
  */