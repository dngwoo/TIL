// 1. 읽기전용 지정자 (Readonly modifier)
// * 내부 메서드로는 readonly 값을 바꿀 수 있다.
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName
    }
}

let dad = new Octopus("Man with the 8 strong legs")
// dad.name = "Man with the 3-piece suit"; // error, name은 읽기전용

// 2. 매개변수 프로퍼티 (Parameter properties)
// * 1번과 같은 코드를 매개변수 프로퍼티에 접근지정자(private,public,protected,readonly) 줌으로서 줄여서 선언할 수 있다.
class Octopus2 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string){}
}

// 3. 접근자 (Accessors)
// getters, setters를 이용한다. get, set은 이미 다 알기 때문에 그냥 넘어간다. 공식문서 예제 참고.
// * 접근자를 사용할때 주의할 점은 ECMAScript3으로의 하향 조정은 지원되지 않기 때문에 ECMAScript 5 이상을 target에 지정해주어야 한다.
// * get, set이 없는 접근자는 자동으로 readonly로 유추된다. 사용자들이 프로퍼티를 바꿀 수 없기 때문에 .d.ts 파일을 생성할 때 유용하다.

class Employee3 {
    fullName: string;
}

let employee3 = new Employee3();
employee3.fullName = "BobSmith"; // BobSmith

// 4. 전역 프로퍼티 (Static Properties)


// 5. 추상 클래스 (Abstract Classes)
// * 추상 클래스는 직접 인스턴스화 불가능
// * 인터페이스와는 달리 구현도 가능하다.
// * 추상 클래스에 정의된 메서드가 구현되어있으면 사용 시 오류 발생.(generateReports)
abstract class Animal6{
    abstract makeSound(): void; // 추상 메서드
    move(): void {
        console.log('oaming the earth...')
    }
}

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // 반드시 파생된 클래스에서 구현되어야 합니다.
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // 파생된 클래스의 생성자는 반드시 super()를 호출
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // 추상 타입의 레퍼런스를 생성합니다
// department = new Department(); // 오류: 추상 클래스는 인스턴스화 할 수 없습니다
department = new AccountingDepartment(); // 추상이 아닌 하위 클래스를 생성하고 할당합니다
department.printName();
department.printMeeting();
// department.generateReports(); // 오류: 선언된 추상 타입에 메서드가 존재하지 않습니다