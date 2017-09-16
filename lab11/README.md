# Lab - Ajax 的測試練習

## 練習步驟

1. 實做 Ajax 測試內容

    ``` js
    describe('PostService', () => {
        describe('#getPost(id)', () => {
            it('should get post data successfully', (done) => {
                // Arrange
                var expected = {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                };
                var actual = 0;
                var postService = new PostService();

                // Act
                actual = postService.getPost(1);

                // Assert
                actual.should.eventually.eql(expected).and.notify(done);

            })
        });
    });
    ```
1. Stub jQuery 的 Ajax 功能

    ``` js
    beforeEach(() => {
        var deferred = $.Deferred();
        deferred.resolve({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        });

        sinon.stub($, "ajax")
            .returns(deferred.promise());
    });

    afterEach(() => {
        $.ajax.restore();
    })
    ```
1. 執行測試，觀察測試結果是否正確

    ``` 
    npm test
    ```