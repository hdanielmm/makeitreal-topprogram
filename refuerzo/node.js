// Node
//
// Write a constructor function called `Node` that receives a value and another
// node, and initializes the attributes `value` and `ref` respectively.

function Node(value, ref) {
    this.value = value;
    this.ref = ref;
}

n5 = new Node(5);
n4 = new Node(4, n5),
n3 = new Node(3, n4);
n2 = new Node(2, n3);
n1 = new Node(1, n2);

var node = n1;

while (node) {
    console.log(node);
    node = node.ref;
}