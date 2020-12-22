class A extends Array {
  remove(target) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === target) this.splice(i, 1);
    }

    return this;
  }
}

const arr = new A(1, 2, 3, 4, 5, 6, 7);

console.log(arr.remove(5));
console.log(arr.remove(2));

const a = arr.remove(1);
console.log(a);
