// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.

function thirdSolution(n) {
  const currentArr = Array.from({ length: n - 1 }, (_, i) => i + 2);

  const isPrime = num => {
    let cnt = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) cnt++;
    }

    return cnt === 1;
  };

  for (let i = 2; i * i < n; i++) {
    if (isPrime(i)) {
      for (let j = i + i - 2; j < n; j += i) currentArr[j] = 0;
    }
  }

  return currentArr.filter(v => v).length;
}

console.log(thirdSolution(10)); // 4
console.log(thirdSolution(5)); // 3

// 성능 이슈
function firstSolution(n) {
  const min = Math.sqrt(n);
  const array = Array.from({ length: n - 1 }, (_, i) => i + 2);
  const minArr = Array.from({ length: min }, (_, i) => i + 1);
  let primeArr = array;

  for (let i = 0; i < minArr.length; i++) {
    let cnt = 0;
    for (let j = 1; j < minArr[i]; j++) {
      if (minArr[i] % j === 0) cnt++;
    }
    if (cnt === 1) {
      primeArr = primeArr.filter(v => v % minArr[i] !== 0 || v === minArr[i]);
    }
  }

  return primeArr.length;
}

console.log(firstSolution(10)); // 4
console.log(firstSolution(5)); // 3

// 성능 이슈
function secondSolution(n) {
  const min = Math.sqrt(n);
  const primeArr = [];

  let currentArr = Array.from({ length: n - 1 }, (_, i) => i + 2);

  const isPrime = num => {
    let cnt = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) cnt++;
    }

    return cnt === 1;
  };

  for (let i = 2; i < min; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
      currentArr = currentArr.filter(v => v % i !== 0);
    }
  }

  return [...primeArr, ...currentArr].length;
}

console.log(secondSolution(10)); // 4
console.log(secondSolution(5)); // 3
