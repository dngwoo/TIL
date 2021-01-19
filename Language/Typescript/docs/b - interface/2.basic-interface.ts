// 컴파일러는 최소한 필요한 프로퍼티가 있는지와 타입이 잘맞는지만 검사한다.

interface LabeledValue {
    label: string;
}

// function printLabel(labelObj: {label: string}){
//     console.log(labelObj.label);
// }

function printLabel(labelObj: LabeledValue) {
    console.log(labelObj.label)
}

let myObj = {size: 10, label: "Size 10 Object"}
printLabel(myObj)