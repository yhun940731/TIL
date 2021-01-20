function solution(arr) {
  const answer = [];
  let j = 0;
  answer[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (answer[j] !== arr[i]) {
      j++;
      answer[j] = arr[i];
    }
  }
  return answer;
}
