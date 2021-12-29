function convertToRoman(num) {
    let remainder = [0,0,0,0,0,0,0]; // sets multipliers for each rank
    let rank = ['M','D','C','L','X','V','I'] // ranks for each Roman
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
    function dec2Rome(remainderIndex,rankIndex){
        let numIndex = []
        switch(remainder[remainderIndex]){
            case 4:
                romanNum.push(rank[rankIndex])
                romanNum.push(rank[rankIndex-1])
                remainder[remainderIndex+1] = 0
                break;
            case 9: // This case will never exist cause its decimal not romannum rank
                console.log(9)
                break;
            default:
                while(remainder[remainderIndex] > 0){
                    romanNum.push(rank[rankIndex])
                    remainder[remainderIndex] -= 1
                }
        }
    }
    let romanNum = []
    if(remainder[0] >= 1){
        dec2Rome(0,0)
    }if(remainder[1] >=1){
        dec2Rome(1,1)
    }if(remainder[2] >=1){
        dec2Rome(2,2)
    }if(remainder[3] >=1){
        dec2Rome(3,3)
    }if(remainder[4] >=1){
        dec2Rome(4,4)
    }if(remainder[5] >=1){
        dec2Rome(5,5)
    }if(remainder[6] >=1){
        dec2Rome(6,6)
    }

    return romanNum.join('')
}


   
   console.log(convertToRoman(4))
   console.log(convertToRoman(7))
   console.log(convertToRoman(9))
   console.log(convertToRoman(39))
   console.log(convertToRoman(49))
//    console.log(convertToRoman(75))
//    console.log(convertToRoman(99))
//    console.log(convertToRoman(111))
//    console.log(convertToRoman(2014))
   
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