str = "0 1 2 3 A man, a plan, a canal. Panama";
str = str.split('')
function cleanStr(items){
    let newStr = []
    for (let i in items){
        if (items[i] == /(1)/){
            newStr.push(true)
        }else{
            newStr.push(false);
        }
    }
    return newStr
}

console.log(str)
console.log(cleanStr(str))
/* 
newStr = str.split('').filter(cleanStr)
console.log(newStr)
*/
