/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 
*/

let sum = 0;
function sumAllValues(range){
    for(let i = 1;i<=range;i++)
    {
        sum = sum+i;
    }
    return sum;
}
let input = 10;
let output = sumAllValues(input);
console.log("The sum of numbers from 1 to "+input+" = "+output);
