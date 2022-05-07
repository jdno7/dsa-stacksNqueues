/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;


  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const node = new Node(val)
    if(!this.first) {
      this.first = node
      this.last = node
      this.size = +1
      return
    }
    this.last.next = node
    node.previous = this.last
    this.last = node
    this.size = this.size +1
    return
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first){
      throw new Error("No one is currently in the Queue")
    }
    const removed = this.first
    if(this.first.next?.previous)
      this.first.next.previous = null
    this.first = this.first.next
    this.size = this.size -1
    if(this.size === 1){
      this.last = this.first
    }
    if (this.size === 0){
      this.last = null
    }
    return removed.val
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first){
      throw new Error("No one is currently in the Queue")
    }
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.first){
      return false
    }
    return true
  }
}

module.exports = Queue;
