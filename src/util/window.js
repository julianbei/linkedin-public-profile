'use strict';
const jsdom = require('jsdom');
const Promise = require('bluebird');

function load(html) {
  return new Promise((resolve, reject) => {
    function callback(errors, window) {
      if (errors) reject(errors);
      resolve(window);
    }

    try {
      jsdom.env(html, ['http://code.jquery.com/jquery.js'], callback);
    } catch (err) { reject(err); }
  });
}

module.exports = { load };
