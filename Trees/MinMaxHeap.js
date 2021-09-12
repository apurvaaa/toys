
class MinHeap {
  
  constructor() {
    this.heapArr = new Array();
  }
  
  get size() {
    return this.heapArr.length;
  }
  
  get heapList() {
    return this.heapArr;
  } 
  
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1)/2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  
  leftChild(index) {
    return this.heapArr[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heapArr[this.getRightChildIndex(index)];
  }

  parent(index) {
    let parentIndex = Math.floor(this.getParentIndex(index));
    return this.heapArr[parentIndex];
  }

  swap(indexToSwap, targetIndex) {
    let temp = this.heapArr[targetIndex];
    this.heapArr[targetIndex] = this.heapArr[indexToSwap];
    this.heapArr[indexToSwap] = temp;
  }

  peek() {
    if (this.size === 0 ) {
      throw new error('empty heap');
    }
    return this.heapArr[0];
  }
    
  get last() {
      return this.heapArr[this.size - 1];
  }

  remove() {
    if (this.size === 0 ) {
      throw new error('empty heap');
    }
    let heapElem = this.heapArr[0];
    this.heapArr[0] = this.heapArr[this.size - 1];
    this.heapArr.pop();
    this.heapifyDown();
    return heapElem;
  }

  add(elem) {
    this.heapArr.push(elem);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.size - 1;
    while(this.hasParent(index) && (this.parent(index) > this.heapArr[index])) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
  
  heapifyDown() {
    let index = 0,
      smallerChildIndex;
    while(this.hasLeftChild(index)) {
      smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && (this.rightChild(index) < this.leftChild(index))) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heapArr[index] < this.heapArr[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
  
  get clone() {
      let cloneHeap = new Heap();
      cloneHeap.heapArr = this.heapArr.slice();
      return cloneHeap;
  }
}
  
class MaxHeap {
  
  constructor() {
    this.heapArr = new Array();
  }

  get size() {
    return this.heapArr.length;
  }
  
  get heapList() {
    return this.heapArr;
  } 

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1)/2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heapArr[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heapArr[this.getRightChildIndex(index)];
  }

  parent(index) {
    let parentIndex = Math.floor(this.getParentIndex(index));
    return this.heapArr[parentIndex];
  }

  swap(indexToSwap, targetIndex) {
    let temp = this.heapArr[targetIndex];
    this.heapArr[targetIndex] = this.heapArr[indexToSwap];
    this.heapArr[indexToSwap] = temp;
  }

  peek() {
    if (this.size === 0 ) {
      throw new error('empty heap');
    }
    return this.heapArr[0];
  }
  
  get last() {
      return this.heapArr[this.size - 1];
  }

  remove() {
    if (this.size === 0 ) {
      throw new error('empty heap');
    }
    let heapElem = this.heapArr[0];
    this.heapArr[0] = this.heapArr[this.size - 1];
    this.heapArr.pop();
    this.heapifyDown();
    return heapElem;
  }

  add(elem) {
    this.heapArr.push(elem);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.size - 1;
    while(this.hasParent(index) && (this.parent(index) < this.heapArr[index])) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0,
      largerChildIndex;
    while(this.hasLeftChild(index)) {
      largerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && (this.rightChild(index) >= this.leftChild(index))) {
        largerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heapArr[index] > this.heapArr[largerChildIndex]) {
        break;
      } else {
        this.swap(index, largerChildIndex);
      }
      index = largerChildIndex;
    }
  }
  
  get clone() {
      let cloneHeap = new Heap();
      cloneHeap.heapArr = this.heapArr.slice();
      return cloneHeap;
  }
}