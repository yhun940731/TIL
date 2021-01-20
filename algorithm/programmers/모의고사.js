function solution(answers) {
  const leng = answers.length;
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const cal = arr => {
    let resArr = [];
    for (let i = 0; i < Math.floor(leng / arr.length); i++) {
      resArr = resArr.concat(arr);
    }
    return resArr.concat(arr.slice(0, leng % arr.length));
  };

  const resCal = [cal(first), cal(second), cal(third)];
  const resCnt = [[1, 0], [2, 0], [3, 0]];

  for (let i = 0; i < leng; i++) {
    for (let j = 0; j < 3; j++) {
      if (resCal[j][i] === answers[i]) resCnt[j][1]++;
    }
  }

  const winner = Math.max(resCnt[0][1], resCnt[1][1], resCnt[2][1]);

  return resCnt.filter(v => v[1] === winner).flat().filter((_, i) => !(i % 2));
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
