'use strict';

import Promise from 'bluebird';
import linkedPeople from './analyse-parts/linkedPeople';
import build from './template/parser';

const m = require('./template/public_profile.json');

const profileParser = build(m);

export default function analyse(window) {
  try {
    const $ = window.$;

    const profile = profileParser($);

    const links = linkedPeople($);

    return Promise.resolve({ profile, links });
  } catch (err) {
    return Promise.reject(err);
  }
}
