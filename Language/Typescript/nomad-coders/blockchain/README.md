# Typescript

## tsc 명령어로 컴파일 해보기
tsc 터미널에 치게 되면 tsconfig.json을 읽어서 컴파일 해준다.
index.js와 index.js.map이 생성된다.

package.json에서 명령어로 등록해서 사용하는 방법이다.
```json
{
    "start": "node index.js",
    "prestart": "tsc"
}
```

## ts-watch 사용해보기
```terminal
yarn add -D ts-watch
```

```json
{
    "start": "tsc-watch --onSuccess \" node dist/index.js\" "
}
```

## 구현하는 블록체인 설명.
그림을 보면 이해가 빠르다.   
현재 블록은 예전 블록의 hash값을 가지고 있다.
![image](https://user-images.githubusercontent.com/56942649/98441461-c82e4b00-2141-11eb-949c-a99f632a23b4.png)
