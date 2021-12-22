function myReplace(str, before, after) {
    // usefule variables
    let result = []
    let index  // index of hunted word
    str = str.split(' ') // split str to find index for specific word
    // searching for specified word with for loop
    for (let i = 0; i < str.length; i++){
        if (str[i] == before){
            if(str[i][0] == str[i][0].toUpperCase()){
                index = after.charAt(0).toUpperCase() + after.slice(1) // cuts and uppercases first letter from *after* then slices and attatches the rest to the back
                result.push(index)
            }else{
             index = after
             result.push(index)
            }
        }else(
            result.push(str[i])
        )
    }
    return result.join(' ');
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
  console.log(myReplace("I think we should look up there", "up", "Down"))

  /*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
  */