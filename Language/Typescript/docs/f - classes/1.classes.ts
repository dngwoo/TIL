// 클래스 3가지 멤버 - 프로퍼티, 생성자, 메서드
// 클래스 멤버에 접근할 때는 this를 사용
class Greeter {
    greeting: string; // 프로퍼티
    constructor(message: string){ // 생성자
        this.greeting = message;
    }
    greet(){ // 메서드
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");