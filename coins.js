/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter(num) {
  // Initialize a JavaScript object to hold the coins
    var coinPurse = {};
    if (num => 25) {
      coinPurse.quarters = Math.floor(num/25); // calculates the floor value for quarters and inserts it into Object
      num = (num - (coinPurse.quarters*25)); // returns number of coins left sans quarters
    }
    if (num >= 10 || num <= 20){ // 
      coinPurse.dimes = Math.floor(num/10); 
      num = (num - (coinPurse.dimes*10));
    } 
    if (num >= 5) {
      coinPurse.nickels = Math.floor(num/5);
      num = (num - (coinPurse.nickels*5));
    } else if (num < 5) {
      coinPurse.nickles = 0;
    }
    coinPurse.pennies = num; // the remainder goes into pennies
    return coinPurse
}
  
var coins = coinCounter(99) // testing condition
console.log(coins) // shows the coinpurse object

// Made this loop to test if the code would display properly for 0 - 100 coins
for (var i = 100; i >= 0; i--) {
  coins = coinCounter(i);
  console.log(i + " makes this many coins");
  console.log(coins); // apparently I can't pass i and coins in the same console log without js freaking out
} // that's like such a js thing to do
// ikr
