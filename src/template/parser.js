'use strict';

import reader from './transform_markup';
import extractors from './types';

export default function build(base) {
  const keys = reader.transform(base.markup, extractors);
  return function parse($) {
    const result = {};
    keys.forEach(extractor => extractor($('body'), result, $));
    return result;
  };
}
