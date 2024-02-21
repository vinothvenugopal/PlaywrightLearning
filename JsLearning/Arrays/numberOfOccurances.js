/*1) Find the number of occurances.  
const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3
hint: loop through the array and compare the k with array index value and if matches, increase the count
*/
let occurance = 0;
function findNumberOfOccurances(inputArray, numberToFind){
    for(let i=0;i<inputArray.length;i++){
        if(inputArray[i] === numberToFind)
        {
            occurance++;
        }
    }
    console.log("The number "+numberToFind+" is present "+occurance+" times.")
}

const toFind = 2;
const numberArray = [2,4,5,2,1,2];;
findNumberOfOccurances(numberArray,toFind);{}