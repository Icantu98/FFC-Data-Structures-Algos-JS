function convertToRoman(num) {
    let romanNum = ''
    let lookup = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    } // keys are the roman numbers so you can filter through the values and push keys into romanNum as they appear
    for(let i in lookup){
        while (num >= lookup[i]){
            romanNum += i;
            num -= lookup[i]
        }
    }
    return romanNum
}


   
   console.log(convertToRoman(4))
   console.log(convertToRoman(7))
   console.log(convertToRoman(9))
   console.log(convertToRoman(39))
   console.log(convertToRoman(49))
//    console.log(convertToRoman(75))
//    console.log(convertToRoman(99))
//    console.log(convertToRoman(111))
   console.log(convertToRoman(2014))
   
/* 
Convert the given number into a roman numeral.
1000 = M
500 = D
100 = C
50 = L
10 = X
5 = V
1 = I
*/