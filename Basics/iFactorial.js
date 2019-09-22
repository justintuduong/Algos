// iFactorial(1) = 1                  => 1
// iFactorial(2) = 2 * 1              => 2
// iFactorial(3) = 3 * 2 * 1          => 6
// iFactorial(4) = 4 * 3 * 2 * 1      => 24
// iFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120


function iFactorial(num){
    let sum = num;
    for (let i = num -1; i > 1; i--){
        sum = sum * (i);
    }
    return sum;
}
console.log(iFactorial(5));
console.log(iFactorial(4));
console.log(iFactorial(3));


