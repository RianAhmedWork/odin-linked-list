import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.removeAt(5);

console.log(list.toString());

list.insertAt("tiger", 2);

console.log(list.toString());
