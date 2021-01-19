// 함수 타입 (Function Types)

// 1. 함수의 타이핑(Typing the function)
function add1(x: number, y:number): number {
    return x + y;
}

let myAdd1 = function(x: number, y:number): number{
    return x + y;
}

// 2. 함수 타입 작성하기(Writing the function type)
let myAdd2: (x: number, y:number) => number = function (x:number, y:number): number {
    return x + y;
}

// x,y를 baseValue, increment로 바꿔도 상관없음.
// let myAdd2: (baseValue: number, increment: number) => number =
//     function(x: number, y: number): number { return x + y; };

// 3 타입 추론(inferring the types)
// 방정식의 한쪽에만 타입이 있더라도 타입을 알아낼 수 있다. 이것을 contextual typing이라고 한다.
let myAdd3 = function(x: number, y:number): number {
    return x + y
}

let myAdd4: (baseValue: number, increment: number) => number = 
    function(x,y) {return x + y}

    