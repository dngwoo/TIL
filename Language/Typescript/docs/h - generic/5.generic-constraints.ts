// 제네릭 제약조건 (Generic Constraints)
// 이것을 해결하는 부분은 T[]로 할 수 도 있지만 그냥 다른 객체에 length 함수를 포함할 수 도 있다.
// 그럴 때 사용방법을 알아보자.

interface Lengthwise{
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg:T): T { // 말 그대로 확장할 때 쓰이는 extends를 사용한다.
    console.log(arg.length);  
    return arg;
}

// loggingIdentity2(3);  // error, number는 .length 프로퍼티가 없기 때문이다.
loggingIdentity2({length: 10, value: 3});
