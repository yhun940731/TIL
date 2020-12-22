class Stack {

  #arr;

  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError('no array')
    }
    this.#arr = array;
  }

  push(v) {
    return this.#arr.push(v);
  }

  pop(v) {
    return this.#arr.pop();
  }

  entries() {
    return [...this.#arr];
  }
}

const stack = new Stack([1, 2, 3, 4, 5]);

console.log(stack.entries());

stack.push(10);
console.log(stack.entries());

stack.pop();
console.log(stack.entries());