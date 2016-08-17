'use strict';

// Scrape a linkedin profile for the public contents

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProfile;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _analyser = require('./analyser');

var _analyser2 = _interopRequireDefault(_analyser);

var _load = require('./load');

var _load2 = _interopRequireDefault(_load);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProfile(param, withlinks) {
  return (0, _load2.default)(param) // retrieve Profile
  .then(function (window) {
    return (0, _analyser2.default)(window);
  }) // Analyse Page
  .then(function (result) {
    if (withlinks) return _bluebird2.default.resolve(result); // resolve to obj: {profile, links}
    return _bluebird2.default.resolve(result.profile); // resolve to profile
  });
}