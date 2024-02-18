/*
1. Create a function named `checkNumberType` that takes a number as a parameter.
2. Use `if` to check if the number is greater than 0.
   Use `else if` to check if the number is less than 0.
   Use `else` to handle the case when the number is not greater than 0 or less than 0 
   (i.e., when it is zero).
3. Return the corresponding string value for each case.
4. Declare and initialize the variable
5. Call the function and print the result
*/

function checkNumberType(input){
   if(input > 0){
      console.log(input + " is greater than 0");
   }
   else if(input < 0){
      console.log(input + " is less than 0");
   }
   else{
      console.log(input + " is neither greater nor less than 0");
   }
}

let number = 0;
checkNumberType(number);