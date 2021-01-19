// 일반, 제네릭이 없다면, 제네릭에 대해서 알아보자

// 일반
function identity(arg: number): number {
    return arg;
}

// any
function identity2(arg:any): any {
    return arg
}

// 제네릭
function identity3<T>(arg: T): T {
    return arg
}

let output = identity3<string>("myString")

let output2 = identity3("myString") // "타입 인수 추론"을 사용함. 이게 가장 일반적인 방법임.