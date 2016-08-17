'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = retrieve;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _useragents = require('./useragents');

var _useragents2 = _interopRequireDefault(_useragents);

var _linkedInUrl = require('./linkedInUrl');

var _linkedInUrl2 = _interopRequireDefault(_linkedInUrl);

var _headers = require('./headers');

var _headers2 = _interopRequireDefault(_headers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var method = 'GET';
var gzip = true;

function retrieve(link) {
  var url = (0, _linkedInUrl2.default)(link);
  var headers = Object.assign({}, _headers2.default, {
    'User-Agent': (0, _useragents2.default)()
  });
  return (0, _requestPromise2.default)({ url: url, method: method, headers: headers, gzip: gzip });
}