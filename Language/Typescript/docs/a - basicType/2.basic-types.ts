// Tuple, Enum, Any, Void,  Never, Type assertions

// Tuple(요소의 타입과 개수가 고정된 배열)
let x: [string, number];
x = ["hello", 10] // 성공
// x = [10, "hello"] // 오류

// Enum(열거 - 순서에 따라 쭉 벌려 놓음)
enum Color {Red, Green, Blue} // Red = 0, Green = 1, Blue = 2
// enum Color {Red = 1, Green, Blue} // Red = 1, Green = 2, Green = 3
// enum Color {Red = 1, Green = 2, Blue = 4} // Red = 1, Green = 2, Green = 4
let c: Color = Color.Green; // 1
let colorName: string = Color[2]; // Blue

// Any
let notSure: any = 4;
notSure = "maybe a string instead"
notSure = false;
let list3: any[] = [1, true, "free"];
list3[1] = 100;

// Void
function warnUser():void {
    console.log('This is my warning message');
}
// 변수에 void를 사용할 때는 undfined, null만 사용가능하다.
let unusable: void = undefined;
unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만

// Never
// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
    throw new Error(message);
}

// 반환 타입이 never로 추론된다.
function fail() {
    return error("Something failed");
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
    while (true) {
    }
}

// Type assertions(타입 단언 - angle-bracket, as syntax)
// 개발자가 타입스크립트보다 값에 대해 더 잘 알 때 사용 된다.
// 런타임에 영향 X, 컴파일러에서만 이용한다.
// angle-bracket syntax
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// as syntax (JSX에서는 as만 허용된다.)
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;