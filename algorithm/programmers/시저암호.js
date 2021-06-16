function solution(s, n) {
  return s
    .split("")
    .map((v) => v.charCodeAt())
    .map((v) => {
      if (v === 32) return 32;
      if (v <= 90) return v + n > 90 ? v + n - 26 : v + n;
      return v + n > 122 ? v + n - 26 : v + n;
    })
    .map((v) => String.fromCharCode(v))
    .join("");
}

console.log(solution("AB", 1)); // BC
