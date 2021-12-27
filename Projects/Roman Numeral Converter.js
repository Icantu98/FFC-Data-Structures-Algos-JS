function convertToRoman(num) {
    let remainder = [0,0,0,0,0,0,0]; // sets multipliers for each rank

    // function to loop througb remainderIndex and fill values
    function remainderFill(remainderIndex,romanDivisor){
        remainder[remainderIndex] = Math.floor(num/romanDivisor)
        num = num - (romanDivisor*remainder[remainderIndex])
    }

     // fill out the remainders
    if(num >= 1000){
        remainderFill(0,1000)
    } if(num >= 500){
        remainderFill(1,500)
    } if(num >= 100){
        remainderFill(2,100)
    } if(num >= 50){
        remainderFill(3,50)
    } if(num >= 10){
        remainderFill(4,10)
    } if(num >= 5){
        remainderFill(5,5)
    } if(num >=1){
        remainderFill(6,1)
    }
    // return remainder;// for testing

	//	YOU HAVE TO REVERSE RANKS FOR 4'S!!!
    // make a string that multiplies with array?? need to fix for below keyvalues first

    // Function for string writring
    function dec2Rome(remainderIndex,romanNumeralRank){
        if(remainderIndex == 4){
            // fix remainderIndexes and flip string
        }
        while(remainder[remainderIndex] > 0){
            romanNum = romanNum.concat(romanNumeralRank)
            remainder[remainderIndex] -= 1
        }
    }
    let romanNum = ''
    if(remainder[0] >= 1){
        dec2Rome(0,'M')
    }if(remainder[1] >=1){
        dec2Rome(1,'D')
    }if(remainder[2] >=1){
        dec2Rome(2,'C')
    }if(remainder[3] >=1){
        dec2Rome(3,'L')
    }if(remainder[4] >=1){
        dec2Rome(4,'X')
    }if(remainder[5] >=1){
        dec2Rome(5,'V')
    }if(remainder[6] >=1){
        dec2Rome(6,'I')
    }

    return romanNum
}


//    console.log(convertToRoman(2))
//    console.log(convertToRoman(4))
//    console.log(convertToRoman(6))
//    console.log(convertToRoman(44))
//    console.log(convertToRoman(69))
//    console.log(convertToRoman(75))
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