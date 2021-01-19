let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard2(x):any {
    if(typeof x === "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard
    }

    else if(typeof x === "number"){
        let pickedSuit = Math.floor(x/13);
        return { suit: suits[pickedSuit], card: x % 13};
    }
}

let myDeck = [{
    suit: "diamonds",
    card: 2
},{
    suit: "spades",
    card: 10
},{
    suit: "hearts",
    card: 4
}]

let pickedCard1 = myDeck[pickCard2(myDeck)]; // pickCard2(myDeck) 애는 0 ,1, 2 셋중 하나 출력, any로 잡혀있음.
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard2(15); // 애는 로직 보면 바로 이해 됨, 얘도 any로 잡혀있음.
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// 5-1.overloads.ts에서 typescript로 이 로직을 어떻게 구현할 것인지 정리