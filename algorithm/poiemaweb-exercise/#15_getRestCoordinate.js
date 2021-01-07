// 직사각형이 되는 나머지 좌표 구하기
// 임의의 좌표 3개가 주어질 때 직사각형이 되는 나머지 1개의 좌표를 구하라. 예를 들어, [[1, 4], [3, 4], [3, 10]]가 주어지면 [1, 10]을 구한다.
// for 문은 사용하지 않도록 하자.
function getRestCoordinate(array) {
  // set을 이용
  // const arr = array.flat();
  // const setA = new Set(arr.filter((v, i, a) => a.indexOf(v) !== i));
  // const setB = new Set(arr);
  // const res = [...setB].filter(v => !setA.has(v));
  // if(arr.indexOf(res[0]) %2) return res.reverse();
  // return res;

  // 좋은 코드
  // const arr = array.flat();
  // let rest = [];
  // arr.filter(v => !rest.includes(v) ? rest.push(v) : rest.splice(rest.indexOf(v), 1))
  // if (arr.indexOf(rest[0]) % 2) return rest.reverse();
  // return rest;

  // 삼항 조건 연산자 사용
  const x = array.flat().filter((_, i) => !(i % 2));
  const y = array.flat().filter((_, i) => i % 2);

  const resX = (x[0] === x[1]) ? x[2] : (x[0] === x[2]) ? x[1] : x[0];
  const resY = (y[0] === y[1]) ? y[2] : (y[0] === y[2]) ? y[1] : y[0];

  return [resX, resY];
}

console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]])); // [1, 10]
console.log(getRestCoordinate([[1, 10], [1, 2], [8, 10]])); // [8,2]
