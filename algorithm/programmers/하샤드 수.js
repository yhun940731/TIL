function solution(n) {
  return (n % (n + '').split('').reduce((acc, cur) => acc + +cur, 0)) === 0;
}