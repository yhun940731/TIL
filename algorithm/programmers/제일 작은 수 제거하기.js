function solution(arr) {
  const answer = arr.filter(v => v !== Math.min(...arr));
  return answer.length ? answer : [-1];
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
