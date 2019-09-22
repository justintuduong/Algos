// Given an array with multiple values (e.g. [1,3,5,7,20]), 
// write a program that prints the average of the values in the array.  
// Again you're not to do this by using of any of the pre-built functions in Javascript.  
// Again iterate through each number in the array and update the 'average' 
// as the program retrieves each number in the array.

function printAvg(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(printAvg([1,3,5,7,20]));    // 36/5 = 7.2

