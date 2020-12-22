/* eslint-disable */
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback) {
    if (typeof callback !== 'function') {
      throw new TypeError(`TypeError: ${callback} is not a function`);
    }
    
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }

  }
}

[1, 2, 3].myForEach((v, i, arr) => {
  console.log(v, i, arr);
});