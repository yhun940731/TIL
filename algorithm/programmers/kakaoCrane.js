function solution(board, moves) {
  const newBoard = [];
  const pick = [];
  let answer = 0;
  let test = 0;
  let x = 0;

  for (let i = 0; i < board.length; i++) {
    newBoard.push([]);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      newBoard[i][j] = board[j][i];
    }
  }

  function isZero(value) {
    return value !== 0;
  }

  // 0값을 갖는 인덱스 순회하며 삭제
  for (let i = 0; i < newBoard.length; i++) {
    newBoard[i] = newBoard[i].filter(isZero);
  }
  console.log(newBoard);

  for (let i = 0; i < moves.length; i++) {
    // 아무것도 없으면 뽑지 않는 기능 추가
    if (newBoard[moves[i] - 1][0]) {
      test = newBoard[moves[i] - 1].shift();
      pick[x] = test;
      if (pick[x - 1] === test) {
        pick.pop();
        pick.pop();
        x -= 2;
        answer += 2;
      }
      x++;
      console.log(i + '번째: ' + pick + ' anwer: ' + answer);
    }
  }

  console.log(pick);
  console.log(newBoard);
  console.log('뽑은 것: ' + pick);

  return answer;
}

const result = solution([
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
], [1, 5, 3, 5, 1, 2, 1, 4]);
console.log('결과 : ' + result);

// [ 0, 0, 0, 4, 3 ],
// [ 0, 0, 2, 2, 5 ],
// [ 0, 1, 5, 4, 1 ],
// [ 0, 0, 0, 4, 3 ],
// [ 0, 3, 1, 2, 1 ]
