/* eslint-disable */

Array.prototype.myMap = function (callback) {

  const that = this;

  for (let i = 0; i < this.length; i++) {
    that[i] = callback(this[i], i, this);
  }
  return that;
}

const a = [1, 2, 3].myMap((v, i, arr) => {
console.log(v, i, arr);
});

console.log(a);