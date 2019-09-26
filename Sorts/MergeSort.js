const unsortedArray = [1, 4, 11, 2, 5, 55, 66, 21, 43, 0];
console.log(mergeSort(unsortedArray));

function mergeSort(array) {

    // If there is only one element in either of
    // the left/right arrays, return the array since it
    // it can't be split, and is, presumably, sorted!

    // I was confused as to why the array returned was the
    // result object from the merge() function and not this
    // array with a length of 1, and TBQH...
    // I still don't 100% get it. I think the return from merge()
    // overrides this one, somehow?
    if (array.length === 1) {
        return array;
    }

    // Split the array in half
    let splitHere = parseInt(array.length / 2),
            leftArray = array.slice(0, splitHere),
            rightArray = array.slice(splitHere, array.length);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {

    // Create an array that will hold our result
    let result = [];

    // While both of the arrays have items:
    while(leftArray.length && rightArray.length) {

        // Note that .shift() returns the first item in an array
        // and _removes_ it from that array

        // Compare the starting items of each array
        // If the left starting item is smaller, move it to
        // the array where we are storing our result
        // otherwise, move the right starting item to result
        if (leftArray[0] <= rightArray[0]) {
            result.push(leftArray.shift());
        } else {
            result.push(rightArray.shift());
        }
    }

    // These while loops will execute only when the
    // above loop breaks when either left/right arrays
    // run out of items.

    // If just the left array has items left, move
    // the first one to the result
    while(leftArray.length) {
        result.push(leftArray.shift());
    }

    // If just the left array has items left, move
    // the first one to the result
    while(rightArray.length) {
        result.push(rightArray.shift());
    }

    // Until the array is sorted i.e. when leftArray and rightArray
    // no longer have items, the program will be caught in the
    // while loops above, but when none of those while statments
    // are true, the original array has been sorted and it can be
    // returned.

    // So, even though we are calling this function several times,
    // it doesn't makes it to the below return until the last go-round.

    // Wowza!
    return result;
}
