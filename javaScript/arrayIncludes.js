class A extends Array {
  mockIncludes(target, startIndex = 0) {
    if (arguments.length === 0) {
      throw new TypeError('no arguments');
    }
    if (startIndex < 0) startIndex = this.length + startIndex;

    for (let i = startIndex; i < this.length; i++) {
      if (target === this[i]) return true;
    }
    return false;
  }
}

const arr = new A(1, 2, 3, 4, 5, 6, 7);

console.log(arr.mockIncludes(7, -5)); // true
console.log(arr.mockIncludes(2)); // true
console.log(arr.mockIncludes()); // TypeError: no arguments
