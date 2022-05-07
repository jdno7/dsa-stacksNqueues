/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const node = new Node(val)
    if (!this.head){
      this.head = node;
      this.tail = node;
      this.length = this.length +1
    }
    else {
      this.tail.next = node;
      node.previous = this.tail
      this.tail = node
      this.length = this.length +1 
    }
    
  }

  traverseForward(val) {
    let currentNode = this.head
    while(currentNode) {
      console.log(currentNode.val)
      currentNode = currentNode.next
    }
  }

  traverseBack(val) {
    let currentNode = this.tail
    while(currentNode) {
      console.log(currentNode.val)
      currentNode = currentNode.previous
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node = new Node(val)
    node.next = this.head
    this.head = node
    this.length = this.length +1
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head){
       console.error('Cannot remove from empty list')
     }
    const removed = this.tail
    this.tail.previous.next = null
    this.tail = this.tail.previous
    this.length = this.length -1
    return removed
     }



  /** shift(): return & remove first item. */

  shift() {
    if (!this.head){
          throw('Cannot remove from empty list')
        }
        const removed = this.head
        this.head = this.head.next
        this.length = this.length -1
        return removed
    }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx > this.length-1){
      throw new Error('Enter a valid index')
    }
    if (idx === 0){
      return this.head
    }
    if (idx === this.length-1){
      return this.tail
    }
    let currentNode = this.head
    let i = 0
    while(i < this.length) {
      if(i === idx){
        return currentNode
      }
      i++
      currentNode = currentNode.next
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    
    if (idx < 0 || idx > this.length-1){
      throw new Error('Enter a valid index')
    }
    const node = new Node(val)

    if (idx === 0){
      node.next = this.head.next
      this.head = node
      this.length = this.length+1
      return
    }
    let currentNode = this.head
    let i = 0
    while(i < this.length) {
      if(i === idx-1){
        node.next = currentNode.next.next
        currentNode.next = node
        if(idx === this.length-1){
          this.tail = node
        }
        return
      }
      i++
      currentNode = currentNode.next
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length){
      throw new Error('Enter a valid index')
    }
    const node = new Node(val)

    if (idx === 0){
      node.next = this.head
      this.head = node
      this.length = this.length+1
      return
    }
    let currentNode = this.head
    let i = 0
    while(i < this.length) {
      if(i === idx-1){
        node.next = currentNode.next
        currentNode.next = node
        this.length = this.length+1
        if(idx === this.length-1){
          this.tail = node
        }
        return
      }
      i++
      currentNode = currentNode.next
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx > this.length-1){
      throw new Error('Enter a valid index')
    }

    if (idx === 0){
      const removed = this.head
      this.head = this.head.next
      this.length = this.length-1
      return removed
    }
    let currentNode = this.head
    let i = 0
    while(i < this.length) {
      if(i === idx-1){
        const removed = currentNode.next
        currentNode.next = currentNode.next.next
        this.length = this.length -1
        if(idx === this.length){
          this.tail = currentNode
        }
        if (this.length === 1){
          this.tail = this.head
        }
        return removed
      }
      i++
      currentNode = currentNode.next
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head
    let i = 0
    let sum = 0
    while(i < this.length) {
      sum += currentNode.val
      currentNode = currentNode.next
      i ++
    }
    return sum / this.length
  }
}





module.exports = LinkedList;