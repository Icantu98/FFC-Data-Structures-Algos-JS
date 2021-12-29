function pairElement(str) {
    let result = []  // pour all the letters here in order
    let dna = []     // seperate into array pairs into here 
    
    // test cases to assing opposite letter
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'G'){
            result.push(str[i])
            result.push('C')
            // result.push('')
        }else if (str[i] == 'C'){
            result.push(str[i])
            result.push('G')
            // result.push('')
        }else if (str[i] == 'A'){
            result.push(str[i])
            result.push('T')   
            // result.push('') 
        }else{
            result.push(str[i])
            result.push('A')
            // result.push('')
        }
    }
    // pulled this from Chunky_Monkey.js basic algos.
    for (let i = 0; i < result.length; i+=2){
        dna.push(result.slice(i,2+i))
    }
    return dna;
  }
  
  console.log(JSON.stringify(pairElement("GCG")))
  console.log(JSON.stringify(pairElement("TTGAG")))
  console.log(JSON.stringify(pairElement("CTCTA")))

  /*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
  */