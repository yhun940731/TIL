function solution(num) {
  let cnt = 0;

  for (let i = 0; num !== 1 && i <= 500; i++) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    cnt++;
  }
  return cnt <= 500 ? cnt : -1;
}
