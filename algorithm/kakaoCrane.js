function solution(board, moves) {
  var answer = 0;
  var newBoard = [];
  var pick = [];
  var test = 0;
  var x = 0;

  for (var cnt = 0; cnt < board.length; cnt++) {
    newBoard.push([]);
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      newBoard[i][j] = board[j][i];
    }
  }

  function isZero(value) {
    return value !== 0;
  }
  // 0값을 갖는 인덱스 순회하며 삭제
  for (var i = 0; i < newBoard.length; i++) {
    newBoard[i] = newBoard[i].filter(isZero);
  }
  console.log(newBoard);

  for (var k = 0; k < moves.length; k++) {
    //아무것도 없으면 뽑지 않는 기능 추가
    if (newBoard[moves[k] - 1][0]) {
      test = newBoard[moves[k] - 1].shift();
      pick[x] = test;
      if (pick[x - 1] === test) {
        pick.pop();
        pick.pop();
        x -= 2;
        answer += 2;
      }
      x++;
      console.log(k + '번째: ' + pick + ' anwer: ' + answer);
    }
  }

  console.log(pick);
  console.log(newBoard);
  console.log("뽑은 것 : " + pick);

  return answer;
}


var result = solution([
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
], [1, 5, 3, 5, 1, 2, 1, 4]);
console.log("결과 : " + result);

// [ 0, 0, 0, 4, 3 ],
// [ 0, 0, 2, 2, 5 ],
// [ 0, 1, 5, 4, 1 ],
// [ 0, 0, 0, 4, 3 ],
// [ 0, 3, 1, 2, 1 ]
