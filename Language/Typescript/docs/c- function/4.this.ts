// 1. this
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"], 
    cards: Array(52),
    createCardPicker: function (){
        return function(){ // () => {} 로 바꿔줘야 에러가 나지 않는다.
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard  % 13}
        }
    }
}

let cardPicker = deck.createCardPicker(); // error, function의 this는 module.exports, exports를 가르키기 때문
let pickedCard = cardPicker();


// 2. this parameter(this 매개변수)
// 가짜 파라미터로서 this의 type을 정의할 수 있음.
function f(this:void){ // 기본 javascript에서는 사용불가, typescript로 컴파일된 Javascript 파일 참조
    console.log(this)
}

interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card; // 1번
}

let deck2: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(this:Deck){ // 2번
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            
            // 원래 1번, 2번 둘중에 하나만 해주면 되는데 1개라도 없다면 this는 any 표시가 된다.
            return { suit: this.suits[pickedSuit], card: pickedCard  % 13}
        }
    }
}

// 3. 콜백에서 this 매개변수(this parameters in callbacks)
// this:void 라는 것은 onclick(callback)이 this 타입을 요구하지 않는 함수가 될 것으로 에상

// a.callback parameter
class Foo {
    save(callback: (n:number) => any): void {
        callback(42);
    }
}

let foo = new Foo();
var strCallback = (result: string) : void => {
    alert(result);
}
var numCallback = (result: number) : void => {
    alert(result.toString());
}

// foo.save(strCallback); // error
foo.save(numCallback); // OK

// 헷갈렸던 부분 정리
// interface Foo2 {
//     save(): void
// }

// interface Foo3{
//     save: () => void // 변수에 함수형 타입을 줄 때 사용
// }

// b. paramters in callbacks
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClickBad(this:Handler, e: Event){
        this.info = e.message // error, this를 아예 빼던지 ()=>{}로 바꿔줘야 한다.
    }
}

let h = new Handler();

class aaa implements UIElement{
    addClickListener(onclick: (this: void, e: Event) => void): void{
        console.log('OK!')
    }
}

const uiElement = new aaa()
uiElement.addClickListener(h.onClickBad) // error