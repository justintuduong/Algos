function insertIntoHeap(heap, val){
    if (heap.length === 0) {
        heap.push(undefined, val);
        return heap;
    }
    heap.push(val);
    let i = heap.length-1;
    while (heap[i] > 0 && heap[i] < heap[Math.floor(i/2)]) {
        temp = heap[Math.floor(i/2)];
        heap[Math.floor(i/2)] = heap[i];
        heap[i] = temp;
        i = i/2;
    }
    return heap;
}
console.log(insertIntoHeap([], 13));  // alters the empty array to be [undefined, 13]
console.log(insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7)); // alters the array to [undefined, 3, 7, 10, 8, 9, 20, 14, 11]