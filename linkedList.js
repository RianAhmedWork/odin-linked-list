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

  // prepend the value to the start of the list
  prepend(value) {
    // create node from the value
    const newNode = new Node(value);
    // if the list is empty prepend it
    if (Object.keys(list).length === 0) {
      list.value = newNode.value;
      list.next = newNode.nextNode;
    }
    // prepend the value to the start of the list
    const newStart = { value: newNode.value, next: this.list };
    this.list = newStart;
  }

  // returns the total number of elements in the list;
  size(counter = 0, list = this.list) {
    let counter = 0;
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
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}
