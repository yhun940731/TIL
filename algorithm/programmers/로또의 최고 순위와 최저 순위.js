// 문제 설명
// 로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다.
// 아래는 로또의 순위를 정하는 방식입니다.

// 순위 당첨 내용
// 1 6개 번호가 모두 일치
// 2 5개 번호가 일치
// 3 4개 번호가 일치
// 4 3개 번호가 일치
// 5 2개 번호가 일치
// 6(낙첨) 그 외

// 로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다.
// 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다.
// 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.

// 순서와 상관없이, 구매한 로또에 당첨 번호와 일치하는 번호가 있으면 맞힌 걸로 인정됩니다.
// 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다.
// 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// lottos는 길이 6인 정수 배열입니다.
// lottos의 모든 원소는 0 이상 45 이하인 정수입니다.
// 0은 알아볼 수 없는 숫자를 의미합니다.
// 0을 제외한 다른 숫자들은 lottos에 2개 이상 담겨있지 않습니다.
// lottos의 원소들은 정렬되어 있지 않을 수도 있습니다.
// win_nums은 길이 6인 정수 배열입니다.
// win_nums의 모든 원소는 1 이상 45 이하인 정수입니다.
// win_nums에는 같은 숫자가 2개 이상 담겨있지 않습니다.
// win_nums의 원소들은 정렬되어 있지 않을 수도 있습니다.

// function solution(lottos, winNums) {
//   const zeroCnt = lottos.filter(v => v === 0).length;
//   const myWinNum = lottos.filter(v => winNums.includes(v)).length;

//   switch (myWinNum) {
//     case 0: return [zeroCnt ? 7 - zeroCnt : 6, 6];
//     case 1: case 2: case 3: case 4: case 5: return [7 - myWinNum - zeroCnt, 7 - myWinNum];
//     case 6: return [1, 1];
//     default: throw new Error('params error');
//   }
// }

function solution(lottos, winNums) {
  const zeroCnt = lottos.filter(v => v === 0).length;
  const myWinNum = lottos.filter(v => winNums.includes(v)).length;

  if (myWinNum === 0) return [zeroCnt ? 7 - zeroCnt : 6, 6];
  if (myWinNum > 0 && myWinNum < 6) {
    return [7 - myWinNum - zeroCnt, 7 - myWinNum];
  }
  return [1, 1];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
