class LinkedList {
  constructor() {
    this.list = {};
  }

  // append to the end of the list
  append(value, list = this.list) {
    // create a node from the value
    const newNode = new Node(value);
    // if the object is empty append it
    if (Object.keys(list).length === 0) {
      list.value = newNode.value;
      list.next = newNode.nextNode;
    }
    // if the next value is null append it
    if (list.next === null) {
      list.next = { value: newNode.value, next: newNode.nextNode };
    }

    // if the next value is not null we recursively call the function
    append(value, list.next);
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}
