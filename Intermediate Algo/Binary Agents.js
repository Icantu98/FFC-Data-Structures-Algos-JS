function binaryAgent(str) {
    let binary = str.split(' ')
    let english = []
    for (let i = 0; i < binary.length; i++){
        english.push(String.fromCharCode(parseInt(binary[i],2)))
    }
    return english.join('')
}
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))
/* 
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/
