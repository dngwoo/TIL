// Function Types(함수 타입)
// 인터페이스는 함수 타입을 설명할 수 있다.

interface SearchFunc{
    (source: string, subString: string): boolean; // 호출 시그니처(call signature)
}

let mySearch: SearchFunc;
// 매개변수 이름은 굳이 같을 필요없다. source -> src, subString -> sub 로 해줘도 상관X
// 밑의 함수에는 원래 (source: string, subString: string): boolean을 해줘도 되지만 "contextual typing"에 의해 추론되기 때문에 안해도 된다.
mySearch = function(source, subString){
    let result = source.search(subString);
    return result > -1;
}