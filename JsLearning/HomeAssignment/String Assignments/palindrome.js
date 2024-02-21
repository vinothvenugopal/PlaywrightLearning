/*
If the given string and reverse string is same --> palindrome
Objective: If the given string is palindrome
hints:
1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false
*/

function isPalindrome(inputString){
    let reversedString = inputString.split("").reverse().join('');
    if(inputString.toUpperCase() === reversedString.toUpperCase()){
        console.log('Given input '+inputString+' is a Palindrome');
    }
    else{
        console.log('Given input '+inputString+' is NOT a Palindrome');
    }    
}
let input = "deified";
isPalindrome(input);