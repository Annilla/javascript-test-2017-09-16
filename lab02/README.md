# Lab - 使用 npm 建立 Mocha.js 測試環境

## 練習步驟

1. 建立專案的相依性設定檔

    ```
    npm init
    ```

2. 安裝程式所需要的套件

    ```
    npm install --save-dev mocha chai
    ```

3. 打開 package.json，加入 test 的指令

    ``` json
    "scripts": {
        "test": "mocha tests/"
    },
    ```

4. 執行測試，觀察測試結果是否正確

    ```
    npm test
    ```

## 進階練習

1. 使用npm安裝自己常用的Library
2. 將node_modules資料夾移除，重新使用npm install觀察是否有成功還原需要的檔案