# 練習使用 Mocha.js 的進階功能

## 練習步驟

1. 將初始化 shoppingCart 的步驟抽出到 beforeEach

    ``` js
    var shoppingCart;
    beforeEach(()=>{
        shoppingCart = new ShoppingCart();
    });
    ```

1. 嘗試使用 4 種 hook，並觀察執行的時機點
    ``` js
    before(()=> console.log('before'));
    beforeEach(()=> console.log('beforeEach'));
    afterEach(()=> console.log('afterEach'));
    after(()=> console.log('after'));
    ```

1. 練習使用 only 只執行某筆測試，以及使用 skip 跳過某筆測試

1. 練習使用 dataSet 改寫測試

    ``` js
    var dataSets = [
        { args: [499], expected: 499 },
        { args: [500], expected: 400 },
    ];

    dataSets.forEach((data) => {
        it(`when price is ${data.args[0]}, total price should be ${data.expected}`, () => {
            // Arrange
            var shoppingCart = new ShoppingCart();

            // Act
            var actual = shoppingCart.Calculate.apply(null, data.args);

            // Assert
            actual.should.equal(data.expected);
        });
    });
    ```