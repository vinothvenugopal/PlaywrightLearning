/*
1) Move Zeroes:
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]*/

let nums = [0,1,0,3,12,13,0,9,8];
let outPutArray = new Array;
let numOfAvailableZeros = 0;
for(let i=0;i<nums.length;i++)
{
   if(nums[i]!=0)
   {
        outPutArray[numOfAvailableZeros++] = nums[i];
   }
}
for(let j = numOfAvailableZeros;j<nums.length;j++)
{
    outPutArray[j] = 0;
}
console.log(outPutArray);