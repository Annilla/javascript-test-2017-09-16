# Lab - 練習 Spy

## 練習步驟

1. 使用 Sinon 建立一個 callback 的 spy，當作傳入 Timer 的 callback

    ``` js
    // Arrange
    var spy = sinon.spy();

    // Act
    Timer(spy);
    ```

2. 驗證 callback 有被呼叫到

    ``` js
    // Arrange
    setTimeout(() => {
        spy.called.should.be.true;
        done();
    }, 4000);
    ```

3. 執行測試，觀察測試結果是否正確

    ```
    npm test
    ```

