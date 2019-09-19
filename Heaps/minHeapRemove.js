function removeFromMinHeap(heap){
    let i = 1;
    let length = heap.length -1;
    
    while (i < length) {
        temp = heap[Math.floor(i/2)];
        heap[Math.floor(i/2)] = heap[i];
        heap[i] = temp;
        i = i/2;
    }
    return heap;
}

// sample outputs:
removeFromMinHeap([undefined, 3, 12, 8, 17, 13, 15, 10]);
// changes the heap to [undefined, 8, 12, 10, 17, 13, 15] and returns 3
removeFromMinHeap([undefined, 8]);
// changes the heap to [undefined] and returns 8