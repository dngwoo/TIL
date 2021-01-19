// const 열거형 (const enums)
// 컴파일 과정에서 완전히 삭제된다. const 열거형은 사용하는 공간에 인라인된다.
// 이러한 동작은 const 열거형이 계산된 멤버를 가지고 있지 않기 때문에 가능하다.(상수 열거형 표현식에만 사용가능)
// 상수 표현식 열거형의 기준은 4.computed-and-constant-members.ts 에서 확인하면 된다.

const enum Enum {
    A = 1,
    B = A * 2 // 상수 표현식 열거형 중 하나임.
}

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

// * 실제 js 코드
// var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
