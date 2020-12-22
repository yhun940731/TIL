// Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로
// 구성된 배열을 반환한다.
Array.from({ length: 3 }, (_, i) => i); // -> [0, 1, 2]
console.log(Array.from({ length: 3 }, (_, i) => i));

const arr = Array.from({ length: 3 }, function (_, i) { return i; }); // -> [0, 1, 2]
console.log(arr);

const array1 = Array.from({ length: 3 });

// 매개변수 _ 는 명시적으로 비워둔다는 의미이다.
const map1 = array1.map((_, i) => i);
console.log(map1); // [0, 1, 2]
