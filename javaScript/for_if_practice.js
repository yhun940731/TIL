// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
var x = 15;

// 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라.
if (10 < x < 20) {
    console.log(x);
}

// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (var i = 0; i < 10; i += 2) {
    console.log(i);
}

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
var result = '';
for (var i = 0; i < 10; i += 2) {
    result += i;
}
console.log(result);

// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (var i = 9; i > 0; i -= 2) {
    console.log(i);
}

// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
var i = 0;

while (i < 10) {
    console.log(i);
    i += 2;
}

// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
var i = 9;

while (i > 0) {
    console.log(i);
    i -= 2;
}

// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
var result = 0;
for (var i = 0; i < 10; i++) {
    result += i;
}
console.log(result);

// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
var result = 0;
for (var i = 0; i < 20; i++) {
    if (i % 2 && i % 3) {
        result += i;
    }
}
console.log(result);

// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
var result = 0;
for (var i = 0; i < 20; i++) {
    if ((i % 2 === 0) || (i % 3 === 0)) {
        result += i;
    }
}
console.log(result);

// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
var dice1 = [1, 2, 3, 4, 5, 6];
var dice2 = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < dice1.length; i++) {
    for (var j = 0; j < dice2.length; j++) {
        if (dice1[i] + dice2[j] === 6) console.log(`[${dice1[i]},${dice2[j]}]`)
    }
}

// 11. 삼각형 출력하기 - pattern 1
// 다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
// 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.
var star = '';
var line = 5; // line 변수 값으로 높이 조절
var i = 0;
var j = 0;

for (i = 0; i < line; i++) {
    for (j = 0; j <= i; j++) {
        star = star.concat('*');
    }
    star = star.concat('\n');
}

console.log(star);

// 12. 삼각형 출력하기 - pattern 2
// 다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다.
// 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.
var star = '';
var line = 5;
var i = 0;
var j = 0;
var k;

for (i = 0; i < line; i++) {

    for (j = 0; j <= i; j++) {
        star = star.concat(' ');
    }

    for (k = line - i; k > 0; k--) {
        star = star.concat('*');
    }

    star = star.concat('\n');
}

console.log(star);

// 13. 삼각형 출력하기 - pattern 3
// 다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.
var star = '';
var line = 5;
var i = 0;
var j;
var k = 0;

for (i; i < line; i++) {
    for (j = line - i; j > 0; j--) {
        star = star.concat('*');
    }
    for (k; k <= i; k++) {
        star = star.concat(' ');
    }
    star = star.concat('\n');
}

console.log(star);

// 14. 삼각형 출력하기 - pattern 4
// 다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.
var star = '';
var line = 100;
var i = 1;
var j;
var k = 0;

for (i; i <= line; i++) {
    for (j = line - i; j > 0; j--) {
        star = star.concat(' ');
    }

    k = 0;
    for (k; k < i; k++) {
        star = star.concat('*');
    }

    star = star.concat('\n');
}

console.log(star);

// 15. 정삼각형 출력하기
//     *
//    ***
//   *****
//  *******
// *********


var star = '';
var line = 5;
var i = 1;
var j;
var k = 0;

for (i; i <= line; i++) {

    for (j = line - i; j > 0; j--) {
        star = star.concat(' ');
    }

    for (k; k < i; k++) {
        star = star.concat('*');
    }
    k = 0;

    for (var l = 0; l < i - 1; l++)
        star = star.concat('*');

    star = star.concat('\n');
}

console.log(star);

// 16. 역정삼각형 출력하기
// *********
//  *******
//   *****
//    ***
//     *

var star = '';
var line = 5;
var i = 0;
var j = 0;
var k = 0;
var l = 0;

for (i; i < line; i++) {

    for (j = 0; j <= i; j++) {
        star = star.concat(' ');
    }

    for (k = line; k > i; k--) {
        star = star.concat('*');
    }


    for (l = line; l > i + 1; l--) {
        star = star.concat('*');
    }

    star = star.concat('\n');
}


console.log(star);