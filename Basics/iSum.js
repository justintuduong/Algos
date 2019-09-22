// implement a function iSum that behaves just like 
// rSum but instead of using recursion to implement the solution it uses iteration.

// rSum(1) = 1                  => 1
// rSum(2) = 1 + 2              => 3
// rSum(3) = 1 + 2 + 3          => 6
// rSum(4) = 1 + 2 + 3 + 4      => 10
// rSum(5) = 1 + 2 + 3 + 4 + 5  => 15

function iSum(num) {
    let sum = 0;
    for (let i = num; i > 0; i--) {
        sum += i;
    }
    return sum;
}

console.log(iSum(5));