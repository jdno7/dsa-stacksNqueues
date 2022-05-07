/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  // push(val) {
  //   const node = new Node(val)
  //   if (!this.first){
  //     this.first = node
  //     this.last = node
  //     this.size = 1
  //     return
  //   }
  //   this.last.next = node
  //   node.previous = this.last
  //   this.last = node
  //   this.size = this.size +1
  // }
  push(val) {
    const node = new Node(val)
    if (!this.first){
      this.first = node
      this.last = node
      this.size = 1
      return
    }
    node.next = this.first
    this.first = node
    this.size = this.size +1
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(!this.first){
      throw new Error("Stack is currently empty")
    }
    const removed = this.first
    this.first = this.first.next
    // if(this.first?.next)  this.first.next = null
    this.size = this.size -1
    if(this.size === 0){
      this.last = null
    }
    return removed.val
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.first){
      return this.first.val
    }
    return
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
      if(this.first){
        return false
      }
      return true
    }
}

module.exports = Stack;
