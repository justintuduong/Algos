// Write a program that would print the sum of all the odd numbers from 1 to 5000

function sumOdd1To5000(){
    let sum = 0;
    for(let i = 1; i < 5000; i+=2){
        sum += i;
    }
    return sum;
}

console.log(sumOdd1To5000());