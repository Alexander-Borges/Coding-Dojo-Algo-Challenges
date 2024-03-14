function sumArray(arr){
    let sum = 0;

    for (let i = 0; i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

let array1 = [1,34,67];
let sum1 = sumArray(array1);
console.log(sum1);