/*2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/
let foundTargetSum = false;
function twoSum(inputArray,targetSum){
    for(let i=0;i<inputArray.length;i++){
        if(inputArray[i] === targetSum){
            foundTargetSum = true;
            console.log("Target is in the 0th index")
        }
        else{
            for(let j=i+1;j<inputArray.length;j++){
                if(inputArray[i]+inputArray[j] === targetSum)
                {
                    foundTargetSum = true;
                    console.log("Target is in the index "+i+" & "+j);
                }
            }
        }
    }
    if(foundTargetSum == false){
        console.log("The input array does not contains values to form given target "+targetSum);
    }
}

const target = 13;
const nums = [-1,4,7,8,11,14];
twoSum(nums,target);