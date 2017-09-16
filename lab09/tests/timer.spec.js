var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon');

chai.should();

var Timer = require('../src/timer');

describe('#Timer(callback)', function(){
    this.timeout(10000);

    it('should invoke callback after 3000 ms', (done) => {
        // 練習使用 spy
    });
});