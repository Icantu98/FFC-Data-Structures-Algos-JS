function translatePigLatin(str) {
    let voules = ['a','e','i','o','u']
    let index =  []  //  used i location of voule
    let strSplit = str.split('')
        for (let i = 0; i < strSplit.length; i++){
            for (let j = 0; j < voules.length; j++){
                if (strSplit[i].includes(voules[j])){
                    index.push(i)
                }
            }
        }
    if(strSplit[0].includes(voules)){
        return false
    }
    
    return result;
}
 

  
  console.log(translatePigLatin("consonant"))