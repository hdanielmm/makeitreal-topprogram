// # Linked List

// Write a constructor function called `LinkedList` that doesn't receives any argument but it initializes an attribute `arr` with an empty array.

// Add a method `add` that receives an argument (of any type) and adds it to the array `arr`.

// Add a method `addAt` that receives two arguments: a position and a value (of any type). It should insert the value in the specified position.

// Add a method `valueAt` that receives a position and returns the value at that position of the array `arr`.

// Add a method `removeAt` that receives a position and removes the value at the specified position.


var Node = function(value, ref) {
    this.value = value;
    this.ref = ref;
}

function LinkedList() {
    
    this.head = null;
    this.size = 0;

    this.addNode = function(value) {
        currentNode = this.head;

        var node = new Node(value)

        if (!this.head) {
            this.head = node;
            this.size++;

            return;
        }

        while (currentNode.ref) {
            currentNode = currentNode.ref;
        }
        currentNode.ref = node;
        this.size++;        
        // console.log(currentNode);
        
        return;
    }

    this.addNodeAt =function(pos, value) {
        var node = new Node(value);
        currentNode = this.head;
        
        
        for (var i = 1; i < pos; i++) {
            currentNode = currentNode.ref;
        }
        node.ref = currentNode.ref;
        currentNode.ref = node;
        this.size++;
        return;
    }

    this.valueAt = function(pos) {
        currentNode = this.head;
        
        for (var i = 1; i < pos; i++) {
            currentNode = currentNode.ref;
        }
        return currentNode.value;
    }

    // this.removeNodeAt = function(pos) {
    //     var deleteNode;
    //     if (pos === 0){
    //         this.head = currentNode.ref;
    //         deleteNode = currentNode;
    //         currentNode = null;
    //         this.size--;
    //         return;
    //     } else {
    //         currentNode = this.head;
    //     }
        
    //     for (var i = 1; i < pos; i++) {
    //         currentNode = currentNode.ref;
    //     }
    //     deleteNode = currentNode.ref;
    //     currentNode = deleteNode.ref;
    //     currentNode.ref = null;
    // }

    this.printList = function(list) {
        currentNode = this.head;
        while (currentNode.ref) {
            console.log(currentNode.value);
            currentNode = currentNode.ref;
        }
        if(!currentNode.ref) console.log(currentNode.value);
    }
}

console.log("---------- addNode ----------");

var list = new LinkedList();

// Tests
list.addNode(3);
list.addNode(11);
list.addNode(15);
list.addNode(20);
list.addNode(25);
list.printList(list);

console.log("---------- addNodeAt ----------");

list.addNode('a');
list.addNode('b');
list.addNode('d');

list.printList(list);
list.addNodeAt(2, 'c');
console.log("After addNodeAt");
list.printList(list);

console.log("---------- valueAt ----------");
console.log(list.valueAt(0)); // '3'
console.log(list.valueAt(3)); // 'c'

console.log("---------- removeNodeAt ----------");
list.removeNodeAt(0);
list.printList(list);
