class LinkedList {
  constructor () {
    this.length = 0
    this.head = null
  }

  insert (index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('error')
    }

    let newNode = {
      value
    }

    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let node = this._find(index - 1)
      newNode.next = node.next
      node.next = newNode
    }
    this.length++
  }

  _find (index) {
    let node = this.head
    for (let i = 0; i < index; i++) {
      node = node.next
    }
    return node
  }

  get (index) {
    if (index < 0 || index >= this.length) {
      throw new Error('error')
    }
    return this._find(index).value
  }

  remove (index) {
    if (index < 0 || index >= this.length) {
      throw new Error('error')
    }

    if (index === 0) {
      this.head = this.head.next
    } else {
      let node = this._find(index - 1)
      node.next = node.next.next
    }
    
    this.length--;
  }
}
