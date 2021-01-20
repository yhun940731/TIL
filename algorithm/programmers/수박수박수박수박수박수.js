function solution(n) {
  let arr = '';

  for (let i = 0; i < n; i++) {
    arr += i % 2 === 0 ? '수' : '박';
  }

  return arr;
}
