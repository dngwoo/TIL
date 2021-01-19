// Public, private 그리고 protected 지정자 (Public, private, and protected modifiers)

// 1. public - js에서는 접근제한자를 아무것도 안적어야 된다. 적으면 오류남
class Animal3 {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// 2. ECMAScript 비공개 필드 (ECMAScript Private Fields) - js에서 #을 사용.
class Animal4 {
    #name: string;
    constructor(theName: string) {
        this.#name = theName;
    }
    move(distanceInMeters: number) {
        console.log(`${this.#name} moved ${distanceInMeters}m.`);
    }
}

// new Animal2("Cat").#name // error, 프로퍼티 '#name'은 비공개 식별자이기 때문에 Animal 클래스 외부에선 접근 불가능

// 3. TypeScript의 private 이해하기 (Understanding TypeScript’s private)
class Animal5 {
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }
}

class Rhino2 extends Animal5 {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }
}

let animal = new Animal5("Goat");
let rhino = new Rhino2();
let employee = new Employee("Bob");

animal = rhino; // private를 서로 공유하기 때문에 가능
// * animal = employee // error, 서로 호환 될 수 없음. Public으로 하면 가능함. 하지만 private일 경우에는 타입이 호환되지 않음. 

// 4. protected 이해하기 (Understanding protected)
class Person2 {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee2 extends Person2 {
    private department: string;
    constructor(name: string, department: string){
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 오류, 파생된 인스턴스 메서드 내에서는 protected 프로퍼티를 사용할 수 있지만 외부에서는 사용 하지 못한다.

// protected constructor를 사용할 수 있지만 이렇게 사용하게 되면 extends를 통해 확장은 가능하지만 인스턴스로 만들 수는 없다.(공식문서 예제 참고)
