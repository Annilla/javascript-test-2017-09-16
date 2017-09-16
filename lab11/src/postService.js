var $ = require('jquery');

function PostService() {
    this.root = 'http://jsonplaceholder.typicode.com';
}

PostService.prototype.getPost = function (id) {
    return $.ajax({
        url: root + '/posts/' + id,
        method: 'GET'
    });
}

module.exports = PostService;