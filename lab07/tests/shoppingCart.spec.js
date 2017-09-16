var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon')

chai.should();

var ShoppingCart = require('../src/shoppingCart');

describe('ShoppingCart', () => {
    describe('#getDiscountPrice(totalPrice)', () => {
        it('total price should calculate discount', () => {
            // Arrange
            var totalPrice = 200;
            var discountRate = 0.5;
            var expected = 100;
            var actual = 0;
            var shoppingCart = new ShoppingCart();

            // Write your stub
            shoppingCart.getDiscountRate = sinon.stub().returns(discountRate);

            // Act
            actual = shoppingCart.getDiscountPrice(totalPrice);

            // Assert
            actual.should.equal(expected);
        });

    });

    describe('#getDiscountRate()', () => {
        it('should get 80% discount if has discount', () => {
            // Arrange
            var expected = 0.8;
            var actual = 0;
            var shoppingCart = new ShoppingCart();

            // Write your stub
            shoppingCart.checkDiscountExist = sinon.stub().returns(true);

            // Act
            actual = shoppingCart.getDiscountRate();

            // Assert
            actual.should.equal(expected);
        });

        it('should get no discount if doesn\'t have discount', () => {
            // Arrange
            var expected = 1;
            var actual = 0;
            var shoppingCart = new ShoppingCart();

            // Write your stub
            shoppingCart.checkDiscountExist = sinon.stub().returns(false);

            // Act
            actual = shoppingCart.getDiscountRate();

            // Assert
            actual.should.equal(expected);
        });
    });
});