// 제네릭 제약조건에서 타입 매개변수 사용 (Using Type Parameters in Generic Constraints)

function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

let xxx = { a:1, b:2, c:3, d:4 };
getProperty(xxx, "a"); // 성공

// 여기서 T는 { a:1, b:2, c:3, d:4 }로  타입 인수 추론을 통해서 정해진다.
// K 는 T의 key 값은 "a" | "b" | "c" | "d" 로 정해진다.