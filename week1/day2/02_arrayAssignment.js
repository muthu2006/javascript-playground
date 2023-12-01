/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]

2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/
console.log("Move Zeroes");
console.log("***********");

let intArray = [0,1,0,3,12];
console.log(`Input integer array : ${intArray}`);

if (intArray.length > 1) {
    for (let index = 0; index < intArray.length; index++) {
        let removedItem;
        if (intArray[index] === 0) {
            removedItem = intArray.splice(index, 1)[0];
            intArray.push(removedItem);
        }
    }
}

console.log(`Output integer array : ${intArray}`);
console.log("");

console.log("Array intersection");
console.log("******************");

let intArray1 = [1,2,2,1];
let intArray2 = [2,2];
console.log(`Input Array1 : ${intArray1}`);
console.log(`Input Array2 : ${intArray2}`);

let intersection = [];
for (let i = 0; i < intArray1.length; i++) {
    for (let j = 0; j < intArray2.length; j++) {
        if (intArray1[i] === intArray2[j] && !intersection.includes(intArray1[i])) {
            intersection.push(intArray1[i]);
            break;
        }
    }
}

console.log(`Intersection Array : ${intersection}`);
console.log("");

console.log("Find the maximum and minimum");
console.log("****************************");

let inputArray = [34, 7, 21, 89, 54, 10, 91, 67];
console.log(`Input Array : ${inputArray}`);
sortedinputArray = inputArray.slice().sort((a,b) => a - b);
minElement = sortedinputArray[0];
maxElement = sortedinputArray[sortedinputArray.length - 1];
minElementIndex = inputArray.indexOf(minElement);
maxElementIndex = inputArray.indexOf(maxElement);

console.log(`Maximum Element: ${maxElement}, Index: ${maxElementIndex}`);
console.log(`Minimum Element: ${minElement}, Index: ${minElementIndex}`);
console.log("");

console.log("Remove duplicates");
console.log("*****************");

let iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
let resultArray = [];
console.log(`Input Array: ${iputArray}`);

for (let i = 0; i < iputArray.length; i++) {
    if (!resultArray.includes(iputArray[i])) {
        resultArray.push(iputArray[i]);
    }
}

console.log(`Result Array is ${resultArray}`);

