function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j);
            }
        }
    }
    return arr;
}

// helper function
function swap (arr, j){
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([1, 3, 5, 7, 2, 4, 6]));
console.log(bubbleSort([3, 2]));