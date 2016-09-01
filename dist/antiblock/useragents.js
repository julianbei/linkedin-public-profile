'use strict';
/* eslint max-len: 0 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = randomAgent;
var agents = ['Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.2; Trident/4.0; Media Center PC 4.0; SLCC1; .NET CLR 3.0.04320)'];

function randomAgent() {
  return agents[Math.floor(Math.random() * agents.length)];
}