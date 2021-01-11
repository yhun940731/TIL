// 평균구하기
// 인수로 주어진 배열의 평균을 구하는 함수를 완성하라.

function average(array) {
  return array.reduce((acc, cur, i, arr) => i === arr.length - 1 ? (acc + cur) / arr.length : acc + cur, 0)
}

console.log(average([5, 3, 4])); // 4
