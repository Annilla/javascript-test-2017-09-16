var $ = require('jquery');

function PostService() {
    this.global = 'http://jsonplaceholder.typicode.com';
}

PostService.prototype.getPost = function (id) {
    return $.ajax({
        url: global + '/posts/' + id,
        method: 'GET'
    });
}

module.exports = PostService;