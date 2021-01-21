function solution(phoneNumber) {
  return [...phoneNumber].map((num, i, arr) => (i < arr.length - 4 ? '*' : num)).join('');
}
