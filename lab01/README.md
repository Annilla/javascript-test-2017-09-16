# Lab - 撰寫第一個測試

* 安裝 mocha

```
npm install -g mocha
```

## 練習步驟

1. 建立測試環境

    ```
    mocha init tests
    ```

2. 打開 tests/tests.js，撰寫測試程式碼

    ``` javascript
    describe('Calculator', () => {
        describe('#Add()', () => {
            it('1 add 1 should be 2', () => {
                // Arrange
                var first = 1;
                var second = 1;
                var expected = 2;
                var actual = 0;
                var calculator = new Calculator()

                // Act
                actual = calculator.Add(first, second);

                // Assert
                if(actual !== expected){
                    throw new Error("Actual !== Expected!");
                }
            });
        })
    })
    ```

3. 在 tests/index.html 加入 js/calculator.js

4. 使用瀏覽器打開 tests/index.html