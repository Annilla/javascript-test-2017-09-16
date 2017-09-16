var mocha = require('mocha');
var chai = require('chai');

chai.should();

var ShoppingCart = require('../src/shoppingCart');

describe('ShoppingCart', () => {
    describe('#Calculate(price)', () => {

        var dataSets = [
            { args: 499, expected: 499 },
            { args: 500, expected: 400 },
        ];

        var shoppingCart;
        beforeEach(()=>{
            shoppingCart = new ShoppingCart();
        });

        before(()=> console.log('before'));
        beforeEach(()=> console.log('beforeEach'));
        afterEach(()=> console.log('afterEach'));
        after(()=> console.log('after'));

        dataSets.forEach((data)=>{
            it(`If price is ${data.args}, then should be ${data.expected}`, () => {
                // Act
                var actual = shoppingCart.Calculate(data.args);
                
                // Assert
                actual.should.equal(data.expected);
            });
        });
    });
});