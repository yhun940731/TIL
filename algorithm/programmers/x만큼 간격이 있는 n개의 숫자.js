function solution(x, n) {
  return Array.from({ length: n }).map((_, i) => x * (i + 1));
}
