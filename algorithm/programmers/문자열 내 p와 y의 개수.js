function solution(s) {
  let answer = true;
  let result = [];
  result = s;
  let p = 0;
  let y = 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i] === 'p' || result[i] === 'P') p++;
    else if (result[i] === 'y' || result[i] === 'Y') y++;
  }
  if (p === y) answer = true;
  else answer = false;

  return answer;
}
