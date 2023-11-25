/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/

function checkOddOrEven(number) {
    if (number%2 === 0) {
        return "Even Number";        
    }
    return "Odd Number"; 
}

let number = 15;
console.log(checkOddOrEven(number)); 