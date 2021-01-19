// 제네릭 타입 변수 작업 (Working with Generic Type Variables)

// 로직에 length를 써야되는데 타입이 generic이라면? 무조건 오류 발생. 그렇기 때문에 array임을 알리기 위해 T[] 이렇게 사용
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length); // 배열은 .length를 가지고 있음. 오류 발생 X. 혹시나해서 type assertion을 써봤는데 오류남.(arg as T[])
    return arg;
}

// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length); // 배열은 .length를 가지고 있음. 오류 발생 X
//     return arg;
// }