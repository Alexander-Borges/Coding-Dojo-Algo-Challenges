// Given an array with multiple values, write a function that returns the maximum number in the array(e.g. for [-3,3,5,7])
function findMax(arr) {
    let maxNumber = arr[0]; // Assume the first element is initially the largest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
        maxNumber = arr[i]; // Update maxNumber if a larger element is found
    }
}

    return maxNumber;
} 
  // Test Case
let myArray = [-3, 3, 5, 99];
let max = findMax(myArray);
console.log(max); // Output: 7 
