// 유니언 타입 (Union Types)
function padLeft(value: string, padding: any){
    if(typeof padding === "number"){
        return Array(padding + 1).join(" ") + value;
    }
    if(typeof padding === "string"){
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'`)
}

// 컴파일 타임에는 통과하지만, 런타임에는 오류가 발생
let indentedString = padLeft("Hello world", true);


// padding: any -> padding: string | number로 바꿔주면 된다.