'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function load(html) {
  return new _bluebird2.default(function (resolve, reject) {
    function callback(errors, window) {
      if (errors) reject(errors);
      resolve(window);
    }

    try {
      _jsdom2.default.env(html, ['http://code.jquery.com/jquery.js'], callback);
    } catch (err) {
      reject(err);
    }
  });
}

exports.default = { load: load };