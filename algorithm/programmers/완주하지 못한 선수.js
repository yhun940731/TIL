function solution(participant, completion) {
  // return participant.filter((v, i, arr) => completion.indexOf(v) === -1 || arr.indexOf(v) !== i).join();

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }

  return undefined;
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // 'leo'
