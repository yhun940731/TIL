function solution(s, n) {
  return s
    .split("")
    .map((v) => v.charCodeAt())
    .map((v) => {
      if (v === 32) return String.fromCharCode(32);
      if (v <= 90) {
        return v + n > 90
          ? String.fromCharCode(v + n - 26)
          : String.fromCharCode(v + n);
      }
      return v + n > 122
        ? String.fromCharCode(v + n - 26)
        : String.fromCharCode(v + n);
    })
    .join("");
}

console.log(solution("AB", 1)); // BC

console.log(solution("AB", 1)); // BC
