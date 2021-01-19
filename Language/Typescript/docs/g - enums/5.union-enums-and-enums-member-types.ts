// 유니언 열거형과 열거형 멤버 타입 (Union enums and enum member types)

// 1. 열거형 멤버를 타입처럼 사용해보기
enum ShapeKind {
    Circle, // 0 
    Square, // 1
}

interface Circle {
    kind: ShapeKind.Circle; // 0
    radius: number;
}

interface Square {
    kind: ShapeKind.Square; // 1
    sideLength: number;
}

let cccc: Circle = {
    kind: ShapeKind.Square, // 오류! 'ShapeKind.Circle' 타입에 'ShapeKind.Square' 타입을 할당할 수 없습니다.
    radius: 100,
}

// 2. 유니언 열거형 사용해보기
enum E5 {
    Foo, // 0 
    Bar, // 1
}

function f(x: E5) {
    if (x !== E5.Foo || x !== E5.Bar) { // 유니언 타입 열거형을 이용하면 이런 바보같은 조건문은 typescript가 잡을 수 있음.
        //             ~~~~~~~~~~~
        // 에러! E5 타입은 Foo, Bar 둘 중 하나이기 때문에 이 조건은 항상 true를 반환한다.
    }
}