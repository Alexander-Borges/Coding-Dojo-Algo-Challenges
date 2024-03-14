// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. 
function noNeg(arr){
    for(var i = 0;i<arr.length;i++){
        if (arr[i] <=0){
            arr[i]=0;
        }
    }
    return arr;
}
var test1 = [1,2,3,-3,-2,-1];
var resultArray = noNeg(test1);
console.log("new array:",test1);