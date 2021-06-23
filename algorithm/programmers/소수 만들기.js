// 문제 설명
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

const isPrime = num => {
  let cnt = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) cnt++;
  }

  return cnt === 1;
};

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) answer++;
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4

// 성능 우세
function solution2(nums) {
  const odd = [];
  const even = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) even.push(nums[i]);
    else odd.push(nums[i]);
  }

  let cnt = 0;

  for (let i = 0; i < even.length - 1; i++) {
    for (let j = i + 1; j < even.length; j++) {
      for (let k = 0; k < odd.length; k++) {
        if (isPrime(even[i] + even[j] + odd[k])) cnt++;
      }
    }
  }

  for (let i = 0; i < odd.length - 2; i++) {
    for (let j = i + 1; j < odd.length - 1; j++) {
      for (let k = j + 1; k < odd.length; k++) {
        if (isPrime(odd[i] + odd[j] + odd[k])) cnt++;
      }
    }
  }

  return cnt;
}

console.log(solution2([1, 2, 3, 4])); // 1
console.log(solution2([1, 2, 7, 6, 4])); // 4
