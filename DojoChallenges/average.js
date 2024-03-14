function findAvg(arr){
    var sum = 0;
    for (i = 0; i<arr.length;i++){
        sum += arr[i];
        
    }
    var avg = sum / arr.length;
    return avg;
}

var testArr = [2,4,6,8,20,50];
var avg = findAvg(testArr);
console.log(avg)
