'use strict';

export function buildExtract(extractors) {
  return function extract(definition) {
    definition.fn = extractors[definition.type](definition);
    return definition;
  };
}

export function transform(base, extractors) {
  return Object.keys(base)
    .map(key => Object.assign({ name: key }, base[key]))
    .filter(item => item.name !== 'type')
    .map(buildExtract(extractors))
    .map(item => item.fn);
}
