function sum_odd_5000(){
    var sum = 0;
    for(i=1;i<=5000;i++){
        if(i%2!=0){
            sum+=i;
        }
    }
    return sum;
}

var odd = sum_odd_5000();
console.log(odd);