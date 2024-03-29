// Given an array with multiples values, write a function that replaces each value in the array with the product of the original value multiplied by itself. (eg.[1,5,10,-2] will become [1,25,100,4])
function squareVal(arr){
    if(arr.length === 0){
        return "Array is empty";
    }
    for (let i = 0;i<arr.length;i++){
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}