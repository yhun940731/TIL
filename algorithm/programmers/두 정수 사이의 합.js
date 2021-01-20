function solution(a, b) {
  let answer = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += a;
      a++;
    }
  } else {
    for (let i = b; b <= a; i++) {
      answer += b;
      b++;
    }
  }

  return answer;
}
