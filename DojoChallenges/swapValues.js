// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. 
function swap(arr){
    if(arr.length<2){
        return "Array must have at least 2 elements."
    }

    let temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    
    
    return arr;
}

let myArray = [1,2,3,4,5,6,7,8,9,10];
let swappedArray = swap(myArray);
console.log(swappedArray);