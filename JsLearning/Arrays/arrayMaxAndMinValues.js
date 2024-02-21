/*3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.
Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1*/

let temp;
function findMaxAndMinValues(inputArray){
    let arrayIndex = inputArray.length
    //bubble sort
    for(let i=0;i<inputArray.length;i++){
        for(j=0;j<inputArray.length-i-1;j++){
            if(input[j]>input[j+1])
            {
                temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;
            }
        }
    }
    console.log("Minimum Value is: "+input[0]+" at index 0");
    console.log("Maximum Value is: "+input[input.length-1]+" at index "+(arrayIndex-1));
}

let input = [34,7,21,89,54,10,91,67];
findMaxAndMinValues(input);