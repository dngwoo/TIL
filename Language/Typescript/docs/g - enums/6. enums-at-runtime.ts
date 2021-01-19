// 런타임에서 열거형 (Enums at runtime)
// enums는 런타임에 존재하는 실제 객체이다.
enum E6 {
    X, Y, Z
}

function f1(obj: { X: number }) {
    return obj.X;
}

// E가 X라는 숫자 프로퍼티를 가지고 있기 때문에 동작하는 코드임.
f1(E6);

// * 실제 js 코드
// "use strict";
// var E6; // 실제로 존재
// (function (E6) {
//     E6[E6["X"] = 0] = "X";
//     E6[E6["Y"] = 1] = "Y";
//     E6[E6["Z"] = 2] = "Z";
// })(E6 || (E6 = {}));
// function f(obj) {
//     return obj.X;
// }
// f(E6); // 실제로 존재하기 때문에 여기에 값으로 넣을 수 있음.

// E6값 : {0: "X", 1: "Y", 2: "Z", X: 0, Y: 1, Z: 2} <- 이기 때문에 obj에 넣을 수 있음.