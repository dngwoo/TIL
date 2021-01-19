// 덕 타이핑은 동적 타이핑의 한 종류이다.
// 만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면 나는 그 새를 오리라고 부를 것이다.
// 클래스 상속이나 인터페이스 구현으로 타입을 구분하는 대신, 덕 타이핑은 객체가 어떤 타입에 걸맞은 변수와 메소드를 지니면 객체를 해당 타입에 속하는 것으로 간주한다

interface Quackable {
    quack(): void;
  }
  
  class Duck implements Quackable {
    quack() {
      console.log('꽥!');
    }
  }
  
  class Person {
    quack() {
      console.log('나도 꽥!');
    }
  }
  
  function makeSomeNoiseWith(duck: Quackable): void {
    duck.quack();
  }
  
  makeSomeNoiseWith(new Duck()); // OK
  makeSomeNoiseWith(new Person()); // OK, 이게 OK가 나는 이유가 duck typing 덕분이다.