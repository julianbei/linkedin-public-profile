'use strict';

const baseUrl = 'https://www.linkedin.com/in/';

function build(link) {
  const position = link.indexOf('/in/') + 4;
  const params = link.indexOf('?');
  let member = '';
  if (params === -1) {
    member = link.substring(position);
  } else {
    member = link.substring(position, params);
  }
  return `${baseUrl}${member}`;
}

module.exports = { build };
