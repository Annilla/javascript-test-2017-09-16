# Lab - 練習撰寫單元測試

## 練習步驟

1. 撰寫一個購物車，超過 500 元打 8 折，沒有超過 500 元則原價計算

2. 透過撰寫測試描述第一個目標，沒超過 500 時購物車會以原價計算

    ``` js
    describe('ShoppingCart', () => {
        describe('#Calculate(price)', () => {
           it('should get original price if total price is less than 500', () => {
               // Arrange
               var price = 499;
               var expected = 499;
               var actual = 0;
               var shoppingCart = new ShoppingCart();
           
               // Act
               actual = shoppingCart.Calculate(price);
           
               // Assert
              actual.should.equal(expected);
           }); 
        });
    });
    ```

3. 實現邏輯

    ``` js
    ShoppingCart.prototype.Calculate = function(price){
        return price;
    }
    ```

4. 透過撰寫測試描述第二個目標，超過 500 時購物車會打 8 折計算

    ``` js
    it('should get 80% discount if total price is greater than 500', () => {
        // Arrange
        var price = 500;
        var expected = 400;
        var actual = 0;
        var shoppingCart = new ShoppingCart();
           
        // Act
        actual = shoppingCart.Calculate(price);
           
        // Assert
        actual.should.equal(expected);
    }); 
    ```

5. 實現第二個邏輯

    ``` js
    ShoppingCart.prototype.Calculate = function (price) {
        if (price >= 500) {
            return price * 0.8;
        }
        return price;
    }
    ```