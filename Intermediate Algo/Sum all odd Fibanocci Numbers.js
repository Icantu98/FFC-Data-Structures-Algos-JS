function sumFibs(num) {
	let sum = 0
	let prevNum = 0 // initial number
	let currNum = 1 // sercond number to get sequence started
	while(currNum <= num){ // to keep loop within the num arg
		if(currNum % 2 !== 0){ // if the current numbers remainder is NOT 0 then its odd and can be added to the sum
			sum = sum + currNum  // add new ODD number to the sum
		}
		currNum = currNum + prevNum // assign new current number to continue sequence
		prevNum = currNum - prevNum // assign new previous number to make next current number
	}
	return sum;
}

console.log(sumFibs(4))
console.log(sumFibs(1000))
console.log(sumFibs(4000000))
console.log(sumFibs(75024))


  /*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/