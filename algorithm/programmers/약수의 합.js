function solution(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) arr.push(i);
  }

  return arr.reduce((acc, cur) => acc + cur, 0);
}
