// Excess Property Checks(초과 프로퍼티 검사)
// * 인터페이스에 지정한 프로퍼티이외에 값이 인자로 들어왔을때, js에서는 조용히 무시하고 넘어간다. 하지만 ts에서는 해당 프로퍼티가 없다는 오류가 발생한다.
// 2. basic-interface랑 비교해보면 좀 더 명확하다.
// 초과 프로퍼티 검사를 피하는 3가지 방법
// 방법 1: type assertion
// 방법 2: index signature
// 방법 3: 변수에 할당 후 인자에 넣기(공통된게 하나라도 있어야 된다. 없으면 에러)

interface SquareConfig2 {
    color?: string;
    width?: number;
}

// index signature 방법
// interface SquareConfig2 {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }

function createSquare2(config: SquareConfig2): { color: string; area: number } {
    return {color: config.color, area: 1111}
}

let mySquare = createSquare2({ color: "red", width: 100, colour: "red" } as SquareConfig2);

//  객체를 다른 변수에 할당하는 것
// let squareOptions = { colour: "red", width: 100 }; // colour만 있으면 에러남. 공통된게 하나라도 있어야 된다.
// let mySquare = createSquare(squareOptions);