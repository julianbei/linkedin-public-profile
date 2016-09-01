'use strict';

import { transform } from './transform_markup';

function extract(d, base, target, $) {
  let selected = {};
  if (d.parent) {
    selected = base;
  } else if (d.base) {
    selected = $(d.selector);
  } else {
    selected = base.find(d.selector);
  }
  if (d.notClass) {
    let set = false;
    d.notClass.forEach(cssClass => {
      set = set || selected.hasClass(cssClass);
    });
    if (set) return { noset: true };
  }
  if (d[d.value] === undefined) return selected[d.value]();
  return selected[d.value](d[d.value]);
}

const extractors = {
  Bool(d) {
    return (base, target, $) => {
      const value = extract(d.Attribute, base, target, $);
      target[d.name] = (value === d.comparison);
    };
  },
  Attribute(d) {
    return (base, target, $) => {
      let attribute = '';
      try {
        attribute = extract(d, base, target, $);
      } catch (err) {
        attribute = d.fallback;
      } finally {
        if (!attribute) target[d.name] = d.fallback;
        if (attribute && !attribute.noset) target[d.name] = attribute;
      }
    };
  },
  Children(d) {
    return (base, target, $) => {
      target[d.name] = [];
      const parent = (d.base) ? $(d.selector) : base.find(d.selector);
      parent.each(function iterate() {
        target[d.name].push($(this.children).text());
      });
    };
  },
  Array(d) {
    let attributes = [];
    if (d.items.type === 'Object') {
      attributes = transform(d.items, extractors);
    }
    return (base, target, $) => {
      const array = [];
      const newBase = (d.base) ? $(d.selector) : base.find(d.selector);

      if (typeof newBase.each === 'function') {
        if (d.items.type === 'Object') {
          newBase.each(function iterator() {
            const item = $(this);
            const obj = {};
            attributes.forEach(extractor => {
              extractor(item, obj, $);
            });
            array.push(obj);
          });
        } else {
          newBase.each(function iterator() {
            const item = $(this);
            const value = {};
            extractors[d.items.type](d.items)(item, value, $);
            if (Object.keys(value).length !== 0) array.push(value);
          });
        }
      }

      target[d.name] = array;
    };
  },
};

export default extractors;
