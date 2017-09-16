var mocha = require('mocha');
var chai = require('chai');

chai.should();

var Calculator = require('../src/calculator');

describe('Calculator', () => {
    describe('#Add()', () => {
        it('1 add 1 should be 2', () => {
            // Arrange
            var first = 1;
            var second = 1;
            var expected = 2;
            var actual = 0;
            var calculator = new Calculator();
            
            // Act
            actual = calculator.Add(first, second);
            
            // Assert
            actual.should.equal(expected);
        });
    });
});