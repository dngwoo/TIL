// 인터페이스 확장하기 (Extending Interfaces)
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

// let square = {} as Square; // as syntax
let square = <Square>{}; // angle-bracket syntax
square.color = "blue";
square.sideLength = 10;