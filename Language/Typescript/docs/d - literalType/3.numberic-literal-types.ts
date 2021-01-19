// 숫자형 리터럴 타입 (Numeric Literal Types)
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return <1 | 2 | 3 | 4 | 5 | 6>(Math.floor(Math.random() * 6) + 1); // () 이부분을 typescript가 미리 계산해주지 않기 때문에 type assertion을 이용해서 지정해줘야 한다.
}
  
const result = rollDice();

// 설정값을 설명할 때 주로 사용된다.
declare function setupMap(config: MapConfig): void;

interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32; // 설정 값
}

setupMap({
    lng: -73.935242,
    lat: 40.73061,
    tileSize: 16 // 설정 값
})