class LinkedList {
  // set the head and tail to be empty until a value is appended
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  // append to the end of the list
  append(value) {
    const newNode = new Node(value);
    // if the list is empty append a node
    // else add the new node to the tail of the current one
    // and update the tail
    if (this.head === undefined && this.tail === undefined) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  // prepend the value to the start of the list
  prepend(value) {
    // create node from the value
    const newNode = new Node(value);
    // if the list is empty prepend it
    if (this.head === undefined && this.tail === undefined) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  // returns the total number of elements in the list;
  size(counter = 0) {
    // if the list has no elements we return 0
    if (Object.keys(this.list).length === 0) {
      return counter;
    }
    // if the next value in the list is null we return the counter + 1
    // else we increase the counter and recursively call the function
    if (list.next === null) {
      return counter + 1;
    } else {
      counter++;
      this.size(counter, list.next);
    }
  }

  // return the first element in the list;
  head() {
    return this.head;
  }

  // return the last node in the list;
  tail() {
    return this.tail;
  }

  // returns the node at the specified index
  at(index, counter = 0, list = this.list) {
    // if the list is empty we return a string
    if (Object.keys(list).length === 0) {
      return "Empty List";
    }

    // if the index matches the counter we return the value
    if (index === counter) {
      return list.value;
    } else {
      counter++;
      at(index, counter, list.next);
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
