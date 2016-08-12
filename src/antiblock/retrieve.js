'use strict';

const request = require('request-promise');
const userAgents = require('./useragents');
const method = 'GET';
const Accept = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8';

function retrieve(url) {
  const headers = {
    'Cache-Control': 'no-cache',
    'User-Agent': userAgents.randomAgent(),
    Accept,
  };
  return request({ url, method, headers });
}

module.exports = retrieve;
