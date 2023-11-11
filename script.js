
// Create a function
// Check if n is less than or equal to 2 
// Initialize two variables
// for loop 
// calculate the next Fibonacci number
//fibCurrent to be the current value
//Returns the value of fibCurrent
//Call the function

function fibonacciIterative(n) {
    if (n <= 2) {
      return 1;
    }
  
    let fibPrev = 1;
    let fibCurrent = 1;
  
    for (let i = 3; i <= n; i++) {
      let fibNext = fibPrev + fibCurrent;
      fibPrev = fibCurrent;
      fibCurrent = fibNext;
    }
  
    return fibCurrent;
  }
  
  console.log(fibonacciIterative(4));
  console.log(fibonacciIterative(7));
  console.log(fibonacciIterative(43));