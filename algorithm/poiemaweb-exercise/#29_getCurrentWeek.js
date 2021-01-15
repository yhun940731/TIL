// 일주일 날짜 구하기
// 오늘을 기준으로 YYYY-MM-DD 형식의 문자열을 요소로 갖는 배열로 일주일 간의 날짜를 구하는 함수를 완성하라.
// 단, 함수가 반환하는 배열은 일요일부터 시작해서 토요일까지 구성한다.

function getCurrentWeek() {
  const oneDay = 86400000;
  const today = new Date();
  const day = today.getDay();
  const weekToMilliseconds = Array.from({ length: 7 },
    (_, i) => Date.parse(today) + oneDay * (i - day));

  return weekToMilliseconds.map(v => new Date(v).toISOString().slice(0, 10));
}

console.log(getCurrentWeek());
/*
오늘이 2020-04-21인 경우,
[
  '2020-04-19',
  '2020-04-20',
  '2020-04-21',
  '2020-04-22',
  '2020-04-23',
  '2020-04-24',
  '2020-04-25'
]
*/
