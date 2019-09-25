// sorts number by finding min val, and placing into the front of the array that has already been sorted.
function selectionSort(arr){

    for (let i = 0; i < arr.length; i++){
        let min = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min){
            swap(arr, i, min);
        }
    }
    return arr;
}

// helper function
function swap(arr, val1, val2){
    let temp = arr[val1];
    arr[val1] = arr[val2];
    arr[val2] = temp;
}

console.log(selectionSort([5, 4, 3, 2, 1]));
console.log(selectionSort([1, 3, 5, 7, 2, 4, 6]));
console.log(selectionSort([3, 2]));
