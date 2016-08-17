'use strict';

import inputs from './util/input';
import window from './util/window';
import retrieve from './antiblock/retrieve';

export default function initialize(param) {
  if (!inputs.isURL(param)) return window.load(param);
  return retrieve(param)
    .then(html => window.load(html));
}
