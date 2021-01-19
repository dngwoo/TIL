// Boolean, Number, String, Array, Null and undefined, Object, let

// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6; // 10진수
let hex: number = 0xf00d; // 16진수
let binary: number = 0b1010; // 2진수(바이너리)
let octal: number = 0o744; // 8진수

// String
let color: string = "blue";
color = "red";
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old next month.`; // template strings(템플릿 리터럴)

// Array
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3]; // generic, Array<elemType>

// Null and Undefined
// --strictNullChecks을 하게 되면 any와 각자 자신들 타입에만 사용가능
// --strictNullChecks은 왠만하면 사용하는 것을 추천
let u: undefined = undefined;
let n: null = null;

// Object (no primitive type)
// number, string, boolean, bigint, symbol, null, 또는 undefined가 아닌 나머지
declare function create(o: object | null): void;
create({ prop: 0 }); // 성공
// create(42); // 오류
// create("string"); // 오류
// create(false); // 오류
// create(undefined); // 오류

