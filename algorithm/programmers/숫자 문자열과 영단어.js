// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
// s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

function solution(s) {
  const reg = /[0-9]|zero|one|two|three|four|five|six|seven|eight|nine/g;

  return +s.match(reg).map(v => {
    switch (v) {
      case 'zero': return 0;
      case 'one': return 1;
      case 'two': return 2;
      case 'three': return 3;
      case 'four': return 4;
      case 'five': return 5;
      case 'six': return 6;
      case 'seven': return 7;
      case 'eight': return 8;
      case 'nine': return 9;
      default: return v;
    }
  }).join('');
}

console.log(solution('one4seveneight')); // 1478
