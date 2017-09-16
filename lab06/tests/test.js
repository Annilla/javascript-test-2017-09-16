// 練習 assertion
var chai = require('chai');
var should = chai.should();

// 練習基本數值的驗證
var a = 1; var b = 1;
a.should.equal(b);

// 練習物件的比較
var persona = { id: 1, name: 'Test'}; 
var personb = { id: 1, name: 'Test'}; 
persona.should.deep.equal(personb);

// 練習陣列的比較
var list = [1, 2, 3]; 
list.should.have.members([1, 2, 3]);

// 練習型別的檢查
function Calculator(){};
var c = new Calculator(); 
c.should.be.instanceOf(Calculator);

// 練習比較大小
var d = 5; d.should.gt(3);