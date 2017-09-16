function ShoppingCart() {
}

ShoppingCart.prototype.Calculate = function (price) {
    if (price >= 500) {
        return price * 0.8;
    }

    return price;
}

module.exports = ShoppingCart;