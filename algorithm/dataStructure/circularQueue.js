class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
    this.isFull = false;
    this.array = new Array(capacity);
  }

  // put(value) {
  //   if (this.rear === this.capacity - 1 && this.front === 0) {
  //     throw new TypeError('OVERFLOW ERROR');
  //   }

  //   if (this.array[this.front] === undefined) {
  //     this.array[this.front] = value;
  //     return;
  //   }

  //   if (this.rear === this.capacity) {
  //     this.rear = -1;
  //     this.rear += 1;
  //     this.array[this.rear] = value;
  //     return;
  //   }
  //   this.rear += 1;
  //   this.array[this.rear] = value;
  // }

  put(value) {
    if (this.isFull === false) {
      this.array[this.rear++] = value;
      this.rear %= this.capacity;
      if (this.rear === this.front) {
        this.isFull = true;
      }
      return true;
    }
    return false;
  }

  // get() {
  //   const res = this.array[this.front];
  //   this.array[this.front] = undefined;
  //   this.front += 1;
  //   return res;
  // }

  get() {
    if (this.front !== this.rear || this.isFull === true) {
      const value = this.array[this.front++];
      this.front %= this.capacity;
      this.isFull = false;
      return value;
    }
    return undefined;
  }

  peek() {
    if (this.front !== this.rear || this.isFull === true) {
      return this.array[this.front];
    }
    return undefined;
  }

  // print() {
  //   if (this.array[this.front] === undefined) {
  //     console.log('empty queue');
  //   } else {
  //     console.log('*****print******');
  //     for (let i = this.front; i <= this.rear; i++) {
  //       console.log(`arr[${i - this.front}]: ${this.array[i]}`);
  //     }
  //   }
  // }
  print() {
    let s = '';
    let endIdx = this.rear;

    if (this.rear === this.front && this.isFull === false) {
      console.log('[]');
      return;
    }

    if (this.rear <= this.front) {
      endIdx += this.capacity;
    }
    for (let i = this.front; i < endIdx; i++) {
      s += `${this.array[i % this.capacity]} `;
    }
    console.log(`[${s}]`);
  }
}

const queue = new CircularQueue(5);
queue.print();

queue.put(1);
queue.put(2);
queue.put(3);
queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();

queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();
