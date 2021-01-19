// 읽기전용 readonly-properties

// 1. interface readonly
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20};
// p1.x = 5; // error, 수정할 수 없음

// 2. Readonly<T>
let a: number[] = [1,2,3,4]
let ro: ReadonlyArray<number> = a
// ro[0] = 12; // error, 값 변경 불가능
// a = ro // error, 대입 불가능

// 3. override 가능(type assertion 이용)
a = ro as number[]

// 4. readonly vs const
// const는 변수에 사용
// readonly는 프로퍼티에 사용
