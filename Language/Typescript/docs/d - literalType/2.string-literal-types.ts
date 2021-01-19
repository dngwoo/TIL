// 문자열 리터럴 타입 (String Literal Types)

// 1. 문자열 리터럴 타입은 유니언 타입, 타입가드, 타입 별칭과 잘 결합된다.
type Easing = "ease-in" | "ease-out" | "ease-in-out" // 타입 별칭 + 유니온 타입 = enum과 비슷한 형태를 띔

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
        // ...
    } else if (easing === "ease-out") {
    } else if (easing === "ease-in-out") {
    } else {
    }
    }
}

// 2. 오버로드를 구별하는 것과 동일한 방법으로도 사용될 수 있음
function createElement(tagName: "img"): number;
function createElement(tagName: "input"): string;
// ... 추가적인 중복 정의들 ...
function createElement(tagName: string): any {
  // ... 여기에 로직 추가 ...
  
}