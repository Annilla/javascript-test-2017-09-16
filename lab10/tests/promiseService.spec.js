var mocha = require('mocha');
var chai = require('chai');
chai.should();

// 設定 chai as promised
var chaiAsPromised = require('chai-as-promised'); 
chai.use(chaiAsPromised);

var PromiseService = require('../src/promiseService');

describe('PromiseService', () => {
    describe('#getData()', function () {
        this.timeout(10000);

        it('should get data after promise resolve', (done) => {
            // Arrange
            var expected = 2;
            var actual = 0;
            var promiseService = new PromiseService();

            // Act
            actual = promiseService.getData();

            // Assert
            // 使用 chai as promised 簡化驗證
            actual.should.eventually.equal(expected).notify(done);
        });
    });
});