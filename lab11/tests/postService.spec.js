var mocha = require('mocha');
var chai = require('chai');
var chaiAdPromised = require('chai-as-promised');
var sinon = require('sinon');
var $ = require('jquery');

chai.should();
chai.use(chaiAdPromised);

var PostService = require('../src/postService');
