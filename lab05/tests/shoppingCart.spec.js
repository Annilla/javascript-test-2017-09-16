var mocha = require('mocha');
var chai = require('chai');

chai.should();

var ShoppingCart = require('../src/shoppingCart');

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
    });
});