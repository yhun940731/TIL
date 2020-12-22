const arr = [1, 2, 3];

Array.prototype.mockIncludes = function (item, start = 0) {
  if (arguments.length === 0) {
    throw new TypeError('no arguments');
  }

  if (start < 0) start = this.length + start;

  for (let i = start; i < this.length; i++) {
    if (this[i] === item) return true;
  }

  return false;
}
console.log(arr.mockIncludes(3, -3)); // true
console.log(arr.mockIncludes(2)); // true
console.log(arr.mockIncludes()); // TypeError: no arguments