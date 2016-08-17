'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildExtract = buildExtract;
exports.transform = transform;
function buildExtract(extractors) {
  return function extract(definition) {
    definition.fn = extractors[definition.type](definition);
    return definition;
  };
}

function transform(base, extractors) {
  return Object.keys(base).map(function (key) {
    return Object.assign({ name: key }, base[key]);
  }).filter(function (item) {
    return item.name !== 'type';
  }).map(buildExtract(extractors)).map(function (item) {
    return item.fn;
  });
}