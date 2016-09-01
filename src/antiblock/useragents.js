'use strict';
/* eslint max-len: 0 */

import userAgentGenerator from 'user-agent-string-generator';

// const agents = [
//   'Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0',
// ];

export default function randomAgent() {
  return userAgentGenerator(); // agents[Math.floor(Math.random() * agents.length)];
}
