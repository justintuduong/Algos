 // Construct a singly Linked List with JS ES6 using constructor functions

 class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
}

// prototypes below

SLL.prototype.length = function () {
    let runner = this.head;
    let count = 0;
    while (runner) {
        count++
        runner = runner.next
    };
    return count;
}

SLL.prototype.setHead = function (node) {
    if (this.head === null) this.head = node;
    else {                      // else, move current head to next.
        node.next = this.head;  // current head moves to node.next.
        this.head = node;       // node argument is now head.
    }
}

SLL.prototype.push = function (value) { // adds newNode at end of SLL
    let newNode = new Node(value);
    if (this.head === null) this.setHead(newNode);
    else {
        let runner = this.head; 
        while (runner.next) {   // use loop to find last node.next
            runner = runner.next; // runner = null
        }
        runner.next = newNode; // runner.next === null --> runner.next = newNode;
    }
    return this; 
}

SLL.prototype.shift = function (value) {    // 
    let newNode = new Node(value);
    if (!this.head) this.setHead(newNode);  //if head === null, head = newNode
    else {
        newNode.next = this.head;           // move current head down, setHead to newNode
        this.setHead(newNode);
    }
}

SLL.prototype.insertAt = function (idx, value) {
    let newNode = new Node(value);
    let count = 0;
    let runner = this.head;
    while (count != idx - 1) {  // iterate to find matching idx
        count++;
        runner = runner.next;
    }
    newNode.next = runner.next; // newNode points to runner.next
    runner.next = newNode;      // runner.next points to newNode
    return this;
}

SLL.prototype.max = function () {
    let curr = -Infinity;
    let runner = this.head;
    while (runner) {
        curr = Math.max(curr, runner.val)   // curr will become highest val
        runner = runner.next
    }
    return curr;
}

SLL.prototype.min = function () {
    let curr = Infinity;
    let runner = this.head;
    while (runner) {
        curr = Math.min(curr, runner.val)   // curr will become lowest val
        runner = runner.next
    }
    return curr
}

SLL.prototype.average = function () {
    let sum = 0;
    let runner = this.head;
    while (runner) {
        sum += runner.val;                  
        runner = runner.next;
    }
    return sum / this.length();
}

SLL.prototype.print = function () { // used to create an array copy of the current SLL
    let runner = this.head;
    let res = []
    while (runner) {
        res.push(runner.val);
        runner = runner.next;
    }
    return res;
}

SLL.prototype.reverse = function () {
    if (!this.head) {
        return "Error: ID-10T Empty list..."    // ID-10T = "IDIOT"
    } else {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let runner = curr.next;
            curr.next = prev;
            prev = curr;
            curr = runner;
        }
        this.head = prev;
    }
}
// var n = new SLL()
// console.log(n.push(5).push(10).push(15).push(20));
// console.log(n);
// var m = new SLL()
// console.log("Avg: " + n.average())
// n.reverse()
// console.log(n.print())
// console.log(m.reverse())