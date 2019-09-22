// Let's say we are given an array of unsorted numbers. 
// We want to create a function called linearSearch that will take in two arguments: 
// a number and an array. The function will return the position where the number is 
// located in the array if found if it is not found it will return false. 

function linearSearch(num, arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === num) return i;
    }
    return false;
}

console.log(linearSearch(4, [1,2,3,4,5,6]));        // 3
console.log(linearSearch(3, [1,2,2,4,5,6]));        // false
console.log(linearSearch(600, [600,2,3,4,5,6]));    // 0 