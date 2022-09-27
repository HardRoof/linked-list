class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Null by default. If list is empty there is no head
    this.size = 0; // Zero by default, to keep track of size
  }
  // Adds first node
  appendHead(data) {
    this.head = new Node(data, this.head); // New Head.next is the current head
    this.size++;
  }

  // Adds last node
  appendTail(data) {
    let tail = new Node(data); //
    let current; // Initialize current in out scope
    if (ll.size === 0) this.appendHead(data);
    else {
      current = this.head; // Starts from head and loop to find last node
      while (current.next !== null) {
        current = current.next;
      }
      current.next = tail;
    }
    this.size++;
  }

  // inserts a new node with the provided value at the given index
  insertAt(data, index) {
    // Out of range
    if ((index > 0 && index > this.size) || index < 0) {
      return;
    } else if (index === 0) {
      this.appendHead(data);
      return;
    }
    let node = new Node(data);
    let current = this.head;
    let previous;
    let currentPosition = 0;
    while (currentPosition < index) {
      previous = current; // Node before index
      current = current.next; // Node after index
      currentPosition++;
    }
    previous.next = node; // Adds new node after previous
    node.next = current; // Adds current after new inserted node
    this.size++;
  }

  // size - Total number of nodes

  // head - Return head

  // tail - Return tail

  // at(index) - Returns node at given index
  at(index) {
    let current = this.head;
    let currentPosition = 0;
    while (current) {
      // null is falsy
      if (currentPosition === index) {
        console.log(current.data);
      }
      current = current.next;
      currentPosition++;
    }
    return null;
  }

  // pop - Removes last node

  // removeAt(index) - that removes the node at the given index
  removeAt(index) {
    if ((index > 0 && index > this.size) || index < 0) {
      return;
    }
  }

  // contains(value) - Returns true if it contains value

  // find(value) - Returns index of the node containing value, or null if not found

  // Prints your LinkedList objects as strings
  printList() {
    let current = this.head; // It starts with head

    while (current != null) {
      console.log(current.data.toString());
      current = current.next;
    }
  }
}

const ll = new LinkedList();
console.log(ll);

ll.appendHead(300);
ll.appendHead(200);
ll.appendHead(100);
ll.appendTail(400);
ll.insertAt(50, 1);
ll.insertAt(5000, 100);
ll.insertAt(5000, -1);

ll.printList();
ll.at(1);
ll.at(10);
