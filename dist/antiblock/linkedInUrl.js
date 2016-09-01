'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = build;
var baseUrl = 'https://www.linkedin.com/in/';

function build(link) {
  var position = link.indexOf('/in/') + 4;
  var params = link.indexOf('?');
  var member = '';
  if (params === -1) {
    member = link.substring(position);
  } else {
    member = link.substring(position, params);
  }
  return '' + baseUrl + member;
}