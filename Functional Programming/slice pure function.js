function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    let newArray = []
    for (i = beginSlice; i < endSlice; i++){
        newArray.push(anim[i])
    }
    return newArray
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3))
  console.log(inputAnim)

  inputAnim.slice()