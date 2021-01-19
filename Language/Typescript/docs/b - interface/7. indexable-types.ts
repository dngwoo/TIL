// Indexable Types(인덱서블 타입)
 

interface Indexable {
    // [] <- 괄호 표현법과 함께 string으로 접근하게 되면 number값을 뱉는다는 의미이다.
    [key: string]: number; // 인덱스 시그니처(Index signature)
}

const dict: Indexable = {
    foo: 1,
    bar: 2
}

Object.keys(dict).forEach(k => console.log(dict[k]))