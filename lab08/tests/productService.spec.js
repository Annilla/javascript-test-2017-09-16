var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon');

chai.should();

var ProductService = require('../src/productService');

describe('ProductService', () => {
    describe('#getProduct()', () => {
        it('should record visitor count when get product', () => {
            // 練習使用 Mock
            // Arrange
            var productService = new ProductService();
            var mock = sinon.mock(productService);
            mock.expects('addVisitor').once();
                
            // Act
            actual = productService.getProduct();
                
            // Assert
            mock.verify();
        });
    });
});