function ProductService(){
}

ProductService.prototype.getProduct = function(){
    this.addVisitor();

    // 其他邏輯
}

ProductService.prototype.addVisitor = function(){
    // ajax
}

module.exports = ProductService;