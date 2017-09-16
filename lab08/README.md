# Lab - 練習 Mock

1. 練習使用 mock 驗證與外部服務的互動

    * ProductService 在每次取得商品資料時，就會記錄一次訪客記錄，用作計算流量
    * 請練習使用 mock 確保只有紀錄一次訪客紀錄

        ``` js
        // Arrange
        var productService = new ProductService();
        var mock = sinon.mock(productService);
        mock.expects('addVisitor').once();
            
        // Act
        actual = productService.getProduct();
            
        // Assert
        mock.verify();
        ```