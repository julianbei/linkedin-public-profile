'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = build;

var _transform_markup = require('./transform_markup');

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function build(base) {
  var keys = (0, _transform_markup.transform)(base.markup, _types2.default);
  return function parse($) {
    var result = {};
    keys.forEach(function (extractor) {
      return extractor($('body'), result, $);
    });
    return result;
  };
}