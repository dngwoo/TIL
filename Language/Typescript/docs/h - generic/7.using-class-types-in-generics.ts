// 제네릭에서 클래스 타입 사용 (Using Class Types in Generics)

// 제네릭을 사용하는 TypeScript에서 팩토리를 생성할 때 생성자 함수로 클래스 타입을 참조
function create<T>(c: {new(): T;}): T {
    return new c();
}

