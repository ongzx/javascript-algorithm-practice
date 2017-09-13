/**
 * Unordered list
 */

class Node {
  constructor(initdata) {
    this.data = initdata;
    this.next = null;
  }
  
  getData() {
    return this.data;
  }
  
  getNext() {
    return this.next;
  }
  
  setData(newData) {
    this.data = newData;
  }
  
  setNext(newNext) {
    this.next = newNext;
  }
}
  
class UnorderedList {
  constructor() {
    this.head = null;
  }
  
  isEmpty() {
    return this.head === null;
  }
  
  add(item) {
    let temp = new Node(item);
    temp.setNext(this.head);
    this.head = temp;
  }
  
  size() {
    let current = this.head;
    let count = 0;
    while (current != null) {
      count += 1;
      current = current.getNext();
    }
    return count;
  }
  
  search(item) {
      let current = this.head;
      let found = false;
      while (current !== null && !found) {
          if (current.getData() === item) {
              found = true;
          } else {
              current = current.getNext();
          }
      }
      return found;
  }
  
  remove(item) {
      let current = this.head;
      let previous = null;
      let found = false;
      
      while (!found) {
        if (current.getData() === item) {
          found = true;
        } else {
          previous = current;
          current = current.getNext();
        }
      }
      
      if (previous == null) {
        this.head = current.getNext();
      } else {
        previous.setNext(current.getNext());
      }
  }
  
}

  
var myList = new UnorderedList();
myList.add(23);
myList.add(233);

class OrderedList {
  constructor() {
    this.head = null;
  }

  add(item) {
    let current = this.head;
    let previous = null;
    let stop = false;

    while(current != null && !stop) {
      if (current.getData() > item) {
        stop = true;
      } else {
        previous = current;
        current = current.getNext();
      }
    }
    let temp = new Node(item);
    if (previous == null) {
      temp.setNext(this.head);
      this.head = temp;
    } else {
      temp.setNext(current);
      previous.setNext(temp);
    }
  }

  search(item) {
    let current = this.head;
    let found = false;
    let stop = false;

    while(current != null && !found && !stop) {
      if (current.getData() == item) {
        found = true;
      } else {
        if (current.getData() > item) {
          stop = true;
        } else {
          current = current.getNext();
        }
      }
    }

    return found;
  }
}