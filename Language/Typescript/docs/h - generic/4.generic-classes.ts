// 제네릭 클래스 (Generic Classes)
// 클래스 제네릭은 정적 측면이 아닌 인스턴스 측면에서만 제네릭이다.

class GenericNumber<T>{ 
    zeroValue: T;
    add: (x:T, y:T) => T;
}

// * js 실제코드
// class GenericNumber{}

let myGenericNumber = new GenericNumber<number>(); // 클래스를 선언할때 <number> 제네릭을 적어준다.
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y){
    return x + y;
}

// TODO: 궁금한 점
// 1. GenericNumber2에 타입을 다 정해주어도 다시 클래스에서 타입을 정해줘야 되는 이유
class GenericNumber2{ 
    zeroValue: number;
    add: (x:number, y:number) => number;
}

class acac implements GenericNumber2 {
    zeroValue
    constructor(){
        this.zeroValue = 3
    }
    add(x, y){
        return x + y
    }
}