// Optional Properties (선택적 프로퍼티)
// 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달하는 "option bags" 같은 패턴을 만들 때 유용

interface SquareConfig {
    color?: string; // 프로퍼티
    width?: number; // 프로퍼티
}

function createSquare(config: SquareConfig): {color: string, area: number}{
    let newSquare = {color: "white", area: 100};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mSquare = createSquare({color: "black"});