var mocha = require('mocha');
var chai = require('chai');

chai.should();

var ShoppingCart = require('../src/shoppingCart');

// 撰寫測試
describe('ShoppingCart', () => {
    describe('#Calculate(price)', () => {
        it('沒超過 500 元，使用原價', () => {
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

        it('500 元以上，打 8 折', () => {
            // Arrange
            var price = 500;
            var expected = price * 0.8;
            var actual = 0;
            var shoppingCart = new ShoppingCart();

            // Act
            actual = shoppingCart.Calculate(price);

            // Assert
            actual.should.equal(expected);
        });
    });
});