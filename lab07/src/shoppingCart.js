function ShoppingCart() {
}

ShoppingCart.prototype.getDiscountPrice = function (totalPrice) {
    var rate = this.getDiscountRate();

    return totalPrice * rate;
};

ShoppingCart.prototype.getDiscountRate = function () {
    var hasDiscount = this.checkDiscountExist();
    if (hasDiscount) {
        return 0.8;
    }

    return 1;
};

ShoppingCart.prototype.checkDiscountExist = function () {
    // 透過 ajax 取得
};

module.exports = ShoppingCart;