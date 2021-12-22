arr = ([1, 3, 2], [5, 2, 1, 4], [2, 1])
console.log(arr[2])

arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))