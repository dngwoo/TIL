// 컴파일 시점에서 열거형 (Enums at compile time)

enum LogLevel {
    ERROR, WARN, INFO, DEBUG
}

type LogLevelStrings = keyof typeof LogLevel; // type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';와 동일

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
       console.log('Log level key is: ', key);
       console.log('Log level value is: ', num);
       console.log('Log level message is: ', message);
    }
}

printImportant('ERROR', 'This is a message');