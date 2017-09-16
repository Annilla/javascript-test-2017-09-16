# Lab - 練習使用 Chai as promise

1. 安裝 chai as promised

    ```
    npm install --save-dev chai-as-promised
    ```

2. 設定使用 chai as promised

    ``` js
    var chaiAsPromised = require('chai-as-promised'); 
    chai.use(chaiAsPromised);
    ```

3. 用 chai as promised 改寫 promised 驗證

    ``` js
    actual.should.eventually.equal(expected).notify(done);
    ```

4. 執行測試，觀察測試結果是否正確

    ``` 
    npm test
    ```