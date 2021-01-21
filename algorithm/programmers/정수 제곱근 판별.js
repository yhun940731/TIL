function nextSqaure(n) {
  const x = Math.sqrt(n);
  return x % 1 !== 0 ? 'no' : (x + 1) ** 2;
}
