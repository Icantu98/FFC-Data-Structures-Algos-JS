function convertToRoman(num) {
    let remainder = [0,0,0,0,0,0,0]; // sets multipliers for each rank
    // fill out the remainders
    if(num >= 1000){
        // find how many times 1000 into num
        remainder[0] = Math.floor(num/1000)
        // need to subtract 1000x from num to get next values
        num = num - (1000*remainder[0])
    } if(num >= 500){
        remainder[1] = Math.floor(num/500)
        num = num - (500*remainder[1])
    } if(num >= 100){
        remainder[2] = Math.floor(num/100)
        num = num - (100*remainder[2])
    } if(num >= 50){
        remainder[3] = Math.floor(num/50)
        num = num - (50*remainder[3])
    } if(num >= 10){
        remainder[4] = Math.floor(num/10);
        num = num - (10*remainder[4])
    } if(num >= 5){
        remainder[5] = Math.floor(num/5)
        num = num - (5*remainder[5])
    } if(num >=1){
        remainder[6] = Math.floor(num/1)
    }

    
    return remainder;

    // make a string that multiplies with array?? need to fix for below keyvalues first
}


   console.log(convertToRoman(2))
   console.log(convertToRoman(4))
   console.log(convertToRoman(6))
   console.log(convertToRoman(44))
   console.log(convertToRoman(69))
   console.log(convertToRoman(75))
   console.log(convertToRoman(99))
   console.log(convertToRoman(111))
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