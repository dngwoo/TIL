// Advanced Techniques

// 1. 생성자 함수(Constructor functions)
class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter2: Greeter2;
greeter2 = new Greeter2("world");
console.log(greeter2.greet()); // "Hello World"

// * 클래스가 실제로 동작하는 모습임. (클래스 타입 생성(Greeter라는 심볼 타입임) + 생성자 함수 생성)
let Greeter3 = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();

let greeter3;
greeter3 = new Greeter3("world");
console.log(greeter3.greet()); // "Hello, world"

// * 예제는 공식 홈페이지를 참고하자. typeof Greeter = Greeter 이렇게 타입을 줄 수 도 있다.

// 2. 인터페이스로써 클래스 사용하기 (Using a class as an interface)
// * 클래스는 클래스 타입 + 생성자 함수를 생성한다.
// * 클래스 타입을 이용하여 인터페이스를 사용할 수 있는 동일한 위치에서 사용가능하다.
// * 확장시킬때는 "extends" 사용

class Point2 {
    x: number;
    y: number;
}

interface Point3d extends Point2 { // 확장을 위해 extends 사용
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};