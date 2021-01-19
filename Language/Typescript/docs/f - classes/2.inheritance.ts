// 상속 (Inheritance)
// 배우는 것 = extends, 오버라이딩 메서드, super

class Animal {
    move(distanceInMeters: number = 0){
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog2 extends Animal { // extends 사용
    bark(){
        console.log('Woof! Woof!');
    }
}

const dog = new Dog2();
dog.bark();
dog.move(10);
dog.bark();

// Typescript에서는 프로퍼티 존재 시 super을 이용해야 하는 문법이 있음.
class Animal2 {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal2 {
    constructor(name: string) { super(name); } // 부모의 name을 등록하기 위해서 super을 사용한다. 부모 클래스 생성자 함수 실행
    move(distanceInMeters = 5) { // 오버라이딩 메서드
        console.log("Slithering...");
        super.move(distanceInMeters); // super로 부모의 move 메서드 실행
    }
}

class Horse extends Animal2 {
    constructor(name: string) { super(name); } // 부모의 name을 등록하기 위해서 super을 사용한다. 부모 클래스 생성자 함수 실행
    move(distanceInMeters = 45) { // 오버라이딩 메서드
        console.log("Galloping...");
        super.move(distanceInMeters); // super로 부모의 move 메서드 실행
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal2 = new Horse("Tommy the Palomino"); // ! 이 부분 잘 이해 안감.

sam.move();
// Slithering...
// Sammy the Python moved 5m.
tom.move(34);
// Galloping...
// Tommy the Palomino moved 34m.
