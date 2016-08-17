'use strict';

const fs = require('fs');
const jsdom = require('jsdom');

const reader = require('./transform_markup');
const extractors = require('./types');

function build(base) {
  const keys = reader.transform(base.markup, extractors);
  return function parse($) {
    const result = {};
    keys.forEach(extractor => extractor($('body'), result, $));
    return result;
  };
}

const m = require('./public_profile.json');

const html = fs.readFileSync('./test/fixtures/profile.html', 'utf8');

jsdom.env(html, ['http://code.jquery.com/jquery.js'], (errors, window) => {
  const dollar = window.$;
  const parser = build(m);
  const result = parser(dollar);
  console.log(result);
});
