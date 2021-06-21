// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.

// 최대공약수를 구하는 calGCF 함수
function calGCF(bigNum, smallNum) {
  const factor = [];

  for (let i = 2; i <= smallNum; i++) {
    if (bigNum % i === 0 && smallNum % i === 0) {
      bigNum /= i;
      smallNum /= i;
      factor.push(i);
      i = 1;
    }
  }

  return factor.reduce((acc, cur) => acc * cur, 1);
}

function solution(n, m) {
  const GCF = n > m ? calGCF(n, m) : calGCF(m, n);
  const LCM = GCF * (n / GCF) * (m / GCF);
  // LCM = n * m / GCF와 동일하지만 보다 명확한 식을 위해

  return [GCF, LCM];
}

console.log(solution(3, 12)); // [3, 12]
