function identity4<T>(arg: T): T {
    return arg;
  }
  
//비-제네릭 "함수의 타입"과 비슷함. () => 
let output3: <T>(arg:T) => T = identity4

// 객체 리터럴 타입의 함수 "호출 시그니처"로 작성가능. ():
let output4: {<T>(arg:T) : T} = identity4

// 인터페이스를 활용한 제네릭 2가지 방법
// 1번 interface에 제네릭을 이용한 호출 시그니처 작성
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity5<T>(arg: T): T{
    return arg
}

let output5: GenericIdentityFn = identity5;

// 2번. interface generic 작성
interface GenericIdentityFn2<T> { // <T>를 여기에 넘겨준다.
    (arg: T): T; // 이 부분이 변경, <T>가 인터페이스 이름으로 올라감
}

function identity6<T>(arg: T): T{
    return arg
}

let output6: GenericIdentityFn2<number> = identity5; // 제네릭 인터페이스이므로 <type>을 넘겨준다.