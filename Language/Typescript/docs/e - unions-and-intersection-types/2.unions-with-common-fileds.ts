// "유니온 타입의 값"이 있으면 공통된 필드만 사용 가능하다.

interface Bird {
    fly(): void;
    layEggs(): void; // 공통
}
  
interface Fish {
    swim(): void;
    layEggs(): void; // 공통
}

declare function getSmallPet(): Fish | Bird;
let pet = getSmallPet();
pet.layEggs(); // OK, 공통으로 쓰임.
// pet.swim(); // error