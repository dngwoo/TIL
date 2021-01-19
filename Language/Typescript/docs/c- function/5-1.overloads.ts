let suits2 = ["hearts", "spades", "clubs", "diamonds"];

// overload 리스팅은 가장 구체적인 것 부터 적는 것이 좋음. 왜냐하면 차례대로(위->아래 순) 오버로드를 선택하기 때문.
function pickCard(x: {suit: string; card: number; }[]): number; // overload 1번
function pickCard(x: number): {suit: string; card: number; }; // overload 2번
function pickCard(x): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits2[pickedSuit], card: x % 13 };
    }
}

let myDeck2 = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard3 = myDeck[pickCard(myDeck)]; // 5-0.overload.ts에서는 any로 떳지만 지금은 overload한 type이 뜨게 된다.
alert("card: " + pickedCard3.card + " of " + pickedCard3.suit);

let pickedCard4 = pickCard(15); // 5-0.overload.ts에서는 any로 떳지만 지금은 overload한 type이 뜨게 된다.
alert("card: " + pickedCard4.card + " of " + pickedCard4.suit);
