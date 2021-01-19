// 숫자 열거형 (Numeric enums)

// 사용법
// 1번
enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right, // 3
}

// 2번
enum Res {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Res): void { // enum의 이름을 사용하여 타입을 선언
    // ...
}

respond("Princess Caroline", Res.Yes)

// 3번
const getSomeValue = () => {
    return 0;
}

enum E {
    B, // 얘가 A보다 뒤에 오면 오류! 그래서 앞에 선언해줘야 됨.(A보다 뒤에 오면 A가 계산된 "멤버"이므로 초기화가 필요함.)
    A = getSomeValue(),
}

