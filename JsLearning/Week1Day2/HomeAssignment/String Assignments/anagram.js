/*Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

function isAnagram(inputOne,inputTwo){
    if(inputOne.length != inputTwo.length)
    {
        return false;
    }
    else{
        let inputOneArray = inputOne.split("").sort();
        let inputTwoArray = inputTwo.split("").sort();
        if(inputOneArray == inputOneArray)
        {
            return true;
        }
        else{
            return false;
        }
    }
}

let inputOne = 'listen';
let inputTwo = 'silent';
let output = isAnagram(inputOne, inputTwo);
console.log(output);