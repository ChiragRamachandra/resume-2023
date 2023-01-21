---
title: 'Django Crash Course'
date: 'May 5, 2021'
excerpt: 'Django is a very powerful, high level Python framework for building web applications'
cover_image: '/images/posts/img3.jpg'
category: 'Python'
author: 'Sam Smith'
author_image: 'https://randomuser.me/api/portraits/men/12.jpg'
---

<!-- Markdown generator - https://jaspervdj.be/lorem-markdownum/ -->

## What is a Singly Linked List?

A singly linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list.

Each element (commonly called nodes) contains two items: the data stored and a link to the next node. The data can be any valid data type.

The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference

The structure would look like this in javascript below:

![Screenshot 2021-01-20 at 11.51.35 AM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1611123721521/CEm-HdLWY.png align="left")

### Advantages

1. Nodes can easily be removed or added from a singly linked list without reorganising the entire data structure as these nodes don't have an index attached to it, unlike in an array.

### Disadvantage

1. Search is slow in a singly liked list because you have to traverse from the head to the tail.
2. It uses more memory than arrays because of the storage of the pointers to the next node.

## Implementation in Javascript

Creating a Node:

```plaintext
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }

}
```

Creating the function **SinglyLinkedList** with the shell:

```plaintext
class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.tail = null
    this.head = null
  }
}
```

Functions to be implemented:

1. push
2. pop
3. shift
4. unshift
5. get
6. set
7. insert
8. remove
9. reverse

```plaintext
//Piece of data
// reference to the next node - next

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }

}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.tail = null
    this.head = null
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this


  }

  //   traverse(){
  //     let current = this.head
  //     while(current){
  //       current = current.next
  //     }
  //   }

  pop() {
    if (!this.head) {
      return undefined
    }

    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next

    }
    this.tail = newTail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }

  unshift(val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode

    }
    this.length++
    return this

  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      counter++;
      current = current.next

    }
    return current
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true
    }
    return false
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(value)
    let prev = this.get(index - 1)
    let temp = prev.next

    prev.next = newNode
    newNode.next = temp
    this.length++
    return true

  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === this.length - 1) return this.pop
    if (index === 0) return this.shift

    let prev = this.get(index - 1)
    let removed = prev.next
    prev.next = removed.next
    this.length--

    return removed
  }

  reverse() {
    //swapping head and tail
    let node = this.head
    this.head = this.tail
    this.tail = node

    //new variables used for swapping
    let prev = null;
    let next = null;

    for (var i = 0; i < this.length; i++) {
      next = node.next;

      //one way linkage between
      node.next = prev;

      //moving the counter
      prev = node
      node = next
    }
    return this
  }

  print() {
    //used to print out as to see things better
    var arr = [];
    var current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
  }
}

let list = new SinglyLinkedList()
list.push("20")
list.push("30")
list.push("40")
list.push("50")
```

%%[rzr-page]
