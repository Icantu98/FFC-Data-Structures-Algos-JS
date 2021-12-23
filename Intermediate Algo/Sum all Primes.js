function sumPrimes(num) {
	// have to start prime list from 2
	var sum = []
	var sieve = []
	var primes = []
	// This Sieve for loop from https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
	for (let i =2; i <= num; ++i){
		if(!sieve[i]){
			// i has not been marked -- it is prime
			primes.push(i);
			for(let j = i <<1; j <= num; j+=i){
				sieve[j] = true;
			}
		}
	}
	//console.log(primes)
	sum = primes.reduce((result,number) => result + number)
  return sum;
}
  
  console.log(sumPrimes(10))
  console.log(sumPrimes(997))

  /*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
  */
 