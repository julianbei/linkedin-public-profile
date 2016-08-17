'use strict';
import jsdom from 'jsdom';
import Promise from 'bluebird';

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

export default { load };
