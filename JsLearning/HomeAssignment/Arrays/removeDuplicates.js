/*4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]
*/
let nonDuplicateArray = [];
function removeDuplicates(inputArray){
    for(let i=0;i<inputArray.length;i++)
    {
       if(!nonDuplicateArray.includes(inputArray[i])){
        nonDuplicateArray.push(inputArray[i]);
       }
    }
    console.log(nonDuplicateArray);
}

let input = [1, 2, 3, 4, 2, 5, 6, 1, 66,6,7,7,7,8,8,9,0,0,2,3];
removeDuplicates(input);