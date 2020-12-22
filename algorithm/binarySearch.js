function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target > array[mid]) {
      start = mid + 1;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else if (target === array[mid]) return mid;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1

// /*재귀 함수*/
// function binarySearch(array, target, start = 0, end = 6) {
//   var mid = Math.floor((start + end) / 2);
//   if (target > array[mid]) {
//     mid = Math.floor((start + end) / 2);
//     return binarySearch(array, target, mid + 1, end);
//   } else if (target < array[mid]) {
//     mid = Math.floor((start + end) / 2);
//     return binarySearch(array, target, start, mid - 1);
//   } else if (target === array[mid]) return mid;
//   else return -1;
// }
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1
