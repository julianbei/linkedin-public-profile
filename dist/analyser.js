'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = analyse;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _index = require('./parser/index');

var _index2 = _interopRequireDefault(_index);

var _public_profile = require('./templates/public_profile.json');

var _public_profile2 = _interopRequireDefault(_public_profile);

var _profile_links = require('./templates/profile_links.json');

var _profile_links2 = _interopRequireDefault(_profile_links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var profileParser = (0, _index2.default)(_public_profile2.default);
var linkParser = (0, _index2.default)(_profile_links2.default);

function analyse(window) {
  return new _bluebird2.default(function (resolve, reject) {
    try {
      var $ = window.$;
      var profile = profileParser($);
      var links = linkParser($).links;
      resolve({ profile: profile, links: links });
    } catch (err) {
      reject(err);
    }
  });
}