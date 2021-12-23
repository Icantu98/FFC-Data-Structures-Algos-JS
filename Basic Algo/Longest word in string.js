function findLongestWordLength(str) {
    let array = str.split(' ')
    let longest = 0
    for (let i = 0; i < array.length; i++){
      if (array[i].length > longest){
        longest = array[i].length
      }
    }
    return longest
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))