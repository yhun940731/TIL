function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= array[i + 1]) continue;
    else {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] >= array[j + 1]) continue;
        else return false;
      }
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([2, 3, 4, 1, 5])); // false