'use strict';

import request from 'request-promise';
import userAgentGenerator from 'user-agent-string-generator';
import linkedInUrl from './linkedInUrl';
import metaheaders from './headers';

const method = 'GET';
const gzip = true;

export default function retrieve(link) {
  const url = linkedInUrl(link);
  const headers = Object.assign({}, metaheaders, {
    'User-Agent': userAgentGenerator(),
  });
  return request({ url, method, headers, gzip });
}
