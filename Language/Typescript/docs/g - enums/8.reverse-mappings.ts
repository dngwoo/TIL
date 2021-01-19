// 역 매핑 (Reverse mappings)

// 6.런타임 열거형에서 봤던 코드를 보면 E6값이 반대로도 넣어져 있다. 이것을 역 매핑이라고 한다.
// 하지만 enums의 값이 문자열 리터럴이면 역매핑은 받지 않는다.

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