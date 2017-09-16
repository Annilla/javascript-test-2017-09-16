// <!-- 2. 請在此撰寫使用 Calculator 的程式碼 -->

var Calculator = require('./calculator.js');

var calculator = new Calculator(); 
var result = calculator.Add(1, 2);
var result2 = calculator.Minus(1, 2);

console.log(result);
console.log(result2);