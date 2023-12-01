/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
console.log("Given a string s consisting of words and spaces, return the length of the last word in the string");
console.log("*************************************************************************************************");

let inputString = "   fly me   to   the moon  ";
let strArray = inputString.trim().split(" ");
let arrLength = strArray.length;
let lastWord = strArray[arrLength - 1];

console.log(`Input string is "${inputString}"`);
console.log(`Last word is ${lastWord}`);
console.log(`Length of the last word is ${lastWord.length}`);
console.log("");

console.log("Write a function to check if two strings are anagrams");
console.log("*****************************************************");

let inputString1 = "listen";
let inputString2 = "silent";
console.log(`${inputString1} and ${inputString2} are anagrams - ${isAnagram(inputString1, inputString2)}`);

function isAnagram(inputString1, inputString2) {
    if (inputString1.length !== inputString2.length) {
        return false;
    }
    return inputString1.split('').sort().join() === inputString2.split('').sort().join();
}


