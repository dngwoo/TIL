 interface Counter {
     // 호출 시그니처와 속성타입 두가지를 전부 갖고 있는 녀석을 하이브리드 타입이라고 부른다.
    (start: number): string; // 호출 시그니처
    interval: number; // 속성 타입
    reset(): void; // 속성타입
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let ccc = getCounter();
ccc(10);
ccc.reset();
ccc.interval = 5.0;