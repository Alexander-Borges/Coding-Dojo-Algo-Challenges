function squareVal(arr){
    for(var i = 0;i<arr.length;i++){
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}

sqaredArr= [1,2,3,4,5];
console.log(squareVal(sqaredArr));