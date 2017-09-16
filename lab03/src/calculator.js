// <!-- 1. 請在此加入 Calculator class 和 add function -->

function Calculator() {
}

Calculator.prototype.Add = function (first, second) {
    return first + second;
}

Calculator.prototype.Minus = function (first, second) {
    return first - second;
}

module.exports = Calculator;