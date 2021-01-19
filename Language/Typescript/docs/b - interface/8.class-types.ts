// Class Types

// 1. 인터페이스 구현하기(implementing an interface)
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    // interface에서 정의 된 것들은 전부 public으로 기술해야한다. private에서는 특정 타입이 있는지 검사 불가
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m:number ){}
}

// 2. 생성자 인터페이스
interface Animal0 {
    name: string;
    age : number;
}
  
interface AnimalConstructor {
    new (name: string, age: number): Animal0; // 생성 시그니처(construct signature)
}

class Dog implements Animal0 {
    name: string;
    age : number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age  = age;
    }
}

class Cat implements Animal0 {
    name: string;
    age : number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age  = age;
    }
}

function createAnimal(cstr: AnimalConstructor, name: string, age: number): Animal0 {
    return new cstr(name, age); // OK
}

createAnimal(Dog, '팔랑', 15);
createAnimal(Cat, '쭈쭈', 10);