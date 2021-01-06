// 중복된 요소
// 인수로 전달된 배열의 요소 중에서 중복된 요소만으로 구성된 배열을 반환하는 함수를 작성하라.
// for 문은 사용하지 않도록 하자.

function findDuplicated(array) {
  return [...new Set(array.filter((v, i, arr) => arr.indexOf(v) !== i))];
}

console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]
console.log(findDuplicated([1, 5, 1, 6, 5, 2, 5, 8, 7, 6, 6, 2, 1]));
