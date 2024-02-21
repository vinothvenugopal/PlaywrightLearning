/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.*/

let lastWord = "";
function lengthOfLastWord(inputString){
    let inputArray = inputString.split(' ');
    for(let i = inputArray.length-1; i>=0; i--){
        if(inputArray[i].length > 0){
            lastWord = inputArray[i];
            break;
        }
    }
    console.log(`Last Word in the given input is `+lastWord+` and the length of the last word is: `+lastWord.length);
}

let input = "Hello World        ";
lengthOfLastWord(input);

