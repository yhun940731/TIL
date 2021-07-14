// 다음과 같이 7단계의 순차적인 처리 과정을 통해 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞는 지 검사하고,
// 규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고 합니다.
// 신규 유저가 입력한 아이디가 new_id 라고 한다면,

// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//       만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

function solution(newId) {
  const first = newId.toLowerCase();

  const second = first.replace(/[^\w-.]/g, '');

  const third = second.replace(/\.{2,}/g, '.');

  const fourth = third.replace(/^\.|\.$/g, '');

  const fifth = !fourth.length ? 'a' : fourth;

  const sixth = fifth.slice(0, 15).replace(/^\.|\.$/g, '');

  const seventh = sixth.length > 2 ? sixth : sixth + sixth.slice(-1).repeat(3 - sixth.length);

  return seventh;
}

console.log(solution('...!@BaT# *..y.abcdefghijklm')); // 'bat.y.abcdefghi'
