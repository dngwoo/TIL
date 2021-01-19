// 나머지 매개변수 (Rest Parameters)

// 함수에 타입 주기
function buildName3(firstName: string, ...restOfName: string[]){
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName3("dongwoo", "Yugesh", "MinGu");


// 함수의 타입으로 사용
function buildName4(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName4;