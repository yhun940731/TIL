function solution(s) {
  const x = s.split('');
  return s.length % 2 === 0 ? x[x.length / 2 - 1] + x[x.length / 2] : x[x.length / 2 - 0.5];
}
