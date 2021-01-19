// 선택적 매개변수와 기본 매개변수 (Optional and Default Parameter)

// 1. 선택적 매개변수
// * 선택적 매개변수는 절대 필수 매개변수 앞에 올 수 없다.
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // 동작
// let result2 = buildName("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let result3 = buildName("Bob", "Adams");         // 동작

// 2. 기본 매개변수
// TypeScript에서는 유저가 값을 제공하지 않거나 undefined로 했을 때에 할당될 매개변수의 값을 정해 놓을 수 있다.
// * 기본 매개변수는 필수 매개변수 앞에 올 수 있다.
// 생략 가능함. 즉 인자를 주지 않을 수도 있다. result4를 보면 된다.
function buildName1(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result4 = buildName1("Bob");                  // 올바르게 동작, "Bob Smith" 반환
let result5 = buildName1("Bob", undefined);       // 여전히 동작, 역시 "Bob Smith" 반환
// let result6 = buildName1("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let result7 = buildName1("Bob", "Adams");         // 정확함

// 3. 정리
// buildName, buildName1은 (firstName: string, lastName?: string) => string 라는 공통된 타입을 공유.
// lastName의 기본값은 타입에서 사라지고 오직 선택적 매개변수라는 사실만 남긴다. buildName1에 마우스를 올려보면 된다.