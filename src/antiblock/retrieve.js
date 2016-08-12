'use strict';

const request = require('request-promise');
const userAgents = require('./useragents');
const linkedInUrl = require('./linkedInUrl');
const metaheaders = require('./headers');
const method = 'GET';
const gzip = true;

function retrieve(link) {
  const url = linkedInUrl.build(link);
  const headers = Object.assign({}, metaheaders, {
    'User-Agent': userAgents.randomAgent(),
  });
  return request({ url, method, headers, gzip });
}

module.exports = retrieve;
