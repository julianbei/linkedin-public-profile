'use strict';

const Profile = require('./profile');
const linkedPeople = require('./analyse-parts/linkedPeople');
const Promise = require('bluebird');

function analyse(window) {
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

module.exports = analyse;
