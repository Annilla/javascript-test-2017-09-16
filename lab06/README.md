# Lab - 練習 Assertion Library

## 練習步驟

1. 練習基本數值的驗證

    ``` js
    var a = 1; var b = 1; a.should.equal(b);
    ```

1. 練習物件的比較

    ``` js
    var persona = { id: 1, name: 'Test'}; 
    var personb = { id: 1, name: 'Test'}; 
    persona.should.deep.equal(personb);
    ```

1. 練習陣列的比較

    ``` js
    var list = [1, 2, 3]; 
    list.should.have.members([1, 2, 3]);
    ```

1. 練習型別的檢查

    ```js
    function Calculator(){};
    var c = new Calculator(); 
    c.should.be.instanceOf(Calculator);
    ```

1. 練習比較大小

    ``` js
    var d = 5; d.should.gt(3);
    ```