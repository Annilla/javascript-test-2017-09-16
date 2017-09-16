# Lab - Stub 練習

## 練習步驟

1. 練習驗證回傳值

    * 驗證購物車計算價格時, 會計算折扣, 請 Stub getDiscountRate 撰寫測試

        ``` js
        shoppingCart.getDiscountRate = sinon.stub().returns(discountRate);
        ```

2. 練習驗證狀態改變

    * 驗證 getDiscountRate 會根據 checkDiscountExist 的回傳值, 判斷是否須給折扣

        * 回傳值為 true 時，有折扣

            ``` js
            shoppingCart.checkDiscountExist = sinon.stub().returns(true);
            ```

        * 回傳值為 false 時，沒有折扣

            ``` js
            shoppingCart.checkDiscountExist = sinon.stub().returns(false);
            ```