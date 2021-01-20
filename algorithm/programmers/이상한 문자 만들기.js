function solution(s) {
  const arr = Array.from(s.split(' '));

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Array.from(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = j % 2 ? arr[i][j].toLowerCase() : arr[i][j].toUpperCase();
    }
    arr[i] = arr[i].join('');
  }
  const res = arr.join(' ');

  return res;
}