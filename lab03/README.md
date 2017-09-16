# Lab - 練習使用 CommonJs 引用模組

## 練習步驟

1. 打開 calculator.js，撰寫 Calculator 並 export Calculator

    ``` javascript
    function Calculator() {
    }

    Calculator.prototype.Add = function (first, second) {
        return first + second;
    }

    Calculator.prototype.Minus = function (first, second) {
        return first - second;
    }

    module.exports = Calculator;
    ```

2. 打開 app.js ，引用 calculator.js 和 add 函式，並輸出成果看看是否計算正確

    ```javascript
    var Calculator = require('./calculator.js');

    var calculator = new Calculator(); 
    var result = calculator.Add(1, 2);

    console.log(result); 
    ```

3. 打開 Terminal ，輸入指令執行 app.js

    ```
    node src/app.js
    ```

## 進階練習

1. 嘗試撰寫或引用其他的模組