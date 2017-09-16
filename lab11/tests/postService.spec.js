var mocha = require('mocha');
var chai = require('chai');
var chaiAdPromised = require('chai-as-promised');
var sinon = require('sinon');
var $ = require('jquery');

chai.should();
chai.use(chaiAdPromised);

var PostService = require('../src/postService');

var fakeJson = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

describe('PostService', () => {
    describe('#getPost(id)', () => {

        beforeEach(() => {
            var deferred = $.Deferred();
            deferred.resolve(fakeJson);
    
            sinon.stub($, "ajax")
                .returns(deferred.promise());
        });
    
        afterEach(() => {
            $.ajax.restore();
        })

        it('should get post data successfully', (done) => {
            // Arrange
            var expected = fakeJson;
            var actual = 0;
            var postService = new PostService();

            // Act
            actual = postService.getPost(1);

            // Assert
            actual.should.eventually.eql(expected).and.notify(done);

        })
    });
});
