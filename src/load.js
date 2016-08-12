'use strict';

const input = require('./util/input');
const window = require('./util/window');
const retrieve = require('./antiblock/retrieve');

function initialize(param) {
  if (!input.isURL(param)) return window.load(param);
  return retrieve(param)
    .then(html => window.load(html));
}

module.exports = initialize;
