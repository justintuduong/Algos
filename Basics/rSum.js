// rSum(1) = 1                  => 1
// rSum(2) = 1 + 2              => 3
// rSum(3) = 1 + 2 + 3          => 6
// rSum(4) = 1 + 2 + 3 + 4      => 10
// rSum(5) = 1 + 2 + 3 + 4 + 5  => 15

function rSum(num) {
    if (num == 1) {
        return 1;
    } else {
        return num + rSum(num - 1);
    }
}

rSum(5);