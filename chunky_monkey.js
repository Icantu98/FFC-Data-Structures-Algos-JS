function chunkArrayInGroups(arr, size) {
    let result = []
    for(let i = 0; i < arr.length; i+=size){ // +=size fixes division problem
        result.push(arr.slice(i,size+i))
    }
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));   // [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)) // [[0, 1, 2], [3, 4, 5], [6]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)) //[[0, 1], [2, 3], [4, 5], [6, 7], [8]]

