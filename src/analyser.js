'use strict';

import Promise from 'bluebird';
import build from './parser/index';

import profileRules from './templates/public_profile.json';
import linksRules from './templates/profile_links.json';

const profileParser = build(profileRules);
const linkParser = build(linksRules);

export default function analyse(window) {
  return new Promise((resolve, reject) => {
    try {
      const $ = window.$;
      const profile = profileParser($);
      const links = linkParser($).links;
      resolve({ profile, links });
    } catch (err) {
      reject(err);
    }
  });
}
