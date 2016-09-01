'use strict';

import { transform } from './transform_markup';
import extractors from './types';

export default function build(base) {
  const keys = transform(base.markup, extractors);
  return function parse($) {
    const result = {};
    keys.forEach(extractor => extractor($('body'), result, $));
    return result;
  };
}
