'use strict';

import Promise from 'bluebird';
import Profile from './profile';
import linkedPeople from './analyse-parts/linkedPeople';

export default function analyse(window) {
  try {
    const $ = window.$;
    const profile = new Profile($)
      .base()
      .featured()
      .positions()
      .skills()
      .educations()
      .clean();

    const links = linkedPeople($);

    return Promise.resolve({ profile, links });
  } catch (err) {
    return Promise.reject(err);
  }
}
