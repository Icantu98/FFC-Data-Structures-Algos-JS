function translatePigLatin(str) {
  let voules = ['a','e','i','o','u']
  str = str.split('')
  let match = str.match(voules)
  return match;
}



console.log(translatePigLatin("consonant"))