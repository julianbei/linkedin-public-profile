'use strict';
import uniScrape from 'uni-scrape';

import isURL from './util/inputs';
import retrieve from './antiblock/retrieve';
import profileRules from './templates/template.json';

const parser = uniScrape(profileRules);

export default function initialize(param) {
  if (!isURL(param)) return parser(param);
  return retrieve(param)
    .then(parser)
    .catch((err) => {
      console.error('access denied, you have probably been blocked by the ' +
        `linkedin firewall..\n :-( \n statusCode: ${err.statusCode}`);
      throw err;
    });
}
