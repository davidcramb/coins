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

function coinCounter (num) {
  // Initialize a JavaScript object to hold the coins
    var coinPurse = {};
    var remainder;
    if (num => 25) {
      coinPurse.quarters = Math.floor(num/25); // calculates the floor value for quarters and inserts it into Object
      remainder = (num - (coinPurse.quarters*25)); // returns number of coins left
    } 
    console.log(coinPurse.quarters);
    console.log(remainder)
    // remainder = num -
}
coinCounter(75);    

  // return coinPurse;
// }

var coins = coinCounter()
console.log();