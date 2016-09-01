'use strict';

import isURL from './util/inputs';
import window from './util/window';
import retrieve from './antiblock/retrieve';

export default function initialize(param) {
  if (!isURL(param)) return window.load(param);
  return retrieve(param)
    .then(html => window.load(html))
    .catch((err) => {
      console.error('access denied, you have probably been blocked by the ' +
        `linkedin firewall..\n :-( \n statusCode: ${err.statusCode}`);
      throw err;
    });
}
