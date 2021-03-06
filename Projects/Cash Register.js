function checkCashRegister(price, cash, cid) {
	// Base state
	let result = {
		status: '',
		change: []
	}
	const lookup ={
		"ONE HUNDRED":100,
		TWENTY:20,
		TEN:10,
		FIVE:5,
		ONE:1,
		QUARTER:0.25,
		DIME:0.10,
		NICKEL:0.05,
		PENNY:0.01
	}
	
	// Check how much money in register
	let startingCash = 0
	for (let i in cid){
		startingCash += cid[i][1]
	}
	startingCash = Math.round(startingCash*100)/100 // rount to nearest cent to fix errors

	// Check if there is enough money to give change
	let cashNeeded = cash - price
	if (cashNeeded > startingCash){
		result.status = 'INSUFFICIENT_FUNDS'
		return result
	}else if (cashNeeded == startingCash){
		result.status = 'CLOSED';
		result.change = cid
		return result
	}

	// distribute change 
	let cashinRegister = cid
	let change = [['ONE HUNDRED',0],['TWENTY',0],['TEN',0],['FIVE',0],['ONE',0],['QUARTER',0],['DIME',0],['NICKEL',0],['PENNY',0]]
	let j = -1 // to get correct index to add into change 
	for (let i in lookup){
		j += 1
		while (cashNeeded >= lookup[i] && cashinRegister[8-j][1] > 0){
			// console.log(cashinRegister[8-j][1])
			change[j][1] += lookup[i];
			cashNeeded -= lookup[i];
			cid[8-j][1] -= lookup[i];
			cashNeeded = Math.round(cashNeeded*100)/100 // fixes rounding errors 
		}
	}
	
	// clean and check data
	let cleanChange = []
	let cashGiven = 0
	for(let i = 0; i < change.length; i++){
		if(change[i][1] > 0){
			cleanChange.push(change[i])
		}
		cashGiven += change[i][1]
	}
	if (cashGiven < cashNeeded){
		result.status = 'INSUFFICIENT_FUNDS'
		return result
	}
	
	result.status = 'OPEN'
	result.change = cleanChange
   return result;
  }
  
  console.log(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])))
  console.log(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])))
  console.log(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])))
  console.log(JSON.stringify(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])))

  /* 
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order,
as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
  */