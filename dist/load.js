'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialize;

var _inputs = require('./util/inputs');

var _inputs2 = _interopRequireDefault(_inputs);

var _window = require('./util/window');

var _window2 = _interopRequireDefault(_window);

var _retrieve = require('./antiblock/retrieve');

var _retrieve2 = _interopRequireDefault(_retrieve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize(param) {
  if (!(0, _inputs2.default)(param)) return _window2.default.load(param);
  return (0, _retrieve2.default)(param).then(function (html) {
    return _window2.default.load(html);
  });
}