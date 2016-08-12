'use strict';

const jsdom = require('jsdom');
const Promise = require('bluebird');

function retrieve(param) {
  return new Promise((resolve, reject) => {
    try {
      /* eslint no-useless-escape: 0*/
      const pattern = '^((https|http|ftp|rtsp|mms)?://)'
        + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?"
        + '(([0-9]{1,3}\.){3}[0-9]{1,3}'
        + '|'
        + "([0-9a-z_!~*'()-]+\.)*"
        + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.'
        + '[a-z]{2,6})'
        + '(:[0-9]{1,4})?'
        + '((/?)|'
        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
      const regex = new RegExp(pattern);
      const isURL = regex.test(param);

      const callback = (errors, window) => {
        if (errors) reject(errors);
        resolve(window);
      };

      if (!isURL) {
        jsdom.env(param,
            ['http://code.jquery.com/jquery.js'],
            callback
        );
      } else {
        jsdom.env({ url: param,
            scripts: ['http://code.jquery.com/jquery.js'],
            done: callback,
        });
      }
    } catch (err) { reject(err); }
  });
}

module.exports = retrieve;
