'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _transform_markup = require('./transform_markup');

function extract(d, base, target, $) {
  var selected = {};
  if (d.parent) {
    selected = base;
  } else if (d.base) {
    selected = $(d.selector);
  } else {
    selected = base.find(d.selector);
  }
  if (d.notClass) {
    var _ret = function () {
      var set = false;
      d.notClass.forEach(function (cssClass) {
        set = set || selected.hasClass(cssClass);
      });
      if (set) return {
          v: { noset: true }
        };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  if (d[d.value] === undefined) return selected[d.value]();
  return selected[d.value](d[d.value]);
}

var extractors = {
  Bool: function Bool(d) {
    return function (base, target, $) {
      var value = extract(d.Attribute, base, target, $);
      target[d.name] = value === d.comparison;
    };
  },
  Attribute: function Attribute(d) {
    return function (base, target, $) {
      var attribute = '';
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
  Children: function Children(d) {
    return function (base, target, $) {
      target[d.name] = [];
      var parent = d.base ? $(d.selector) : base.find(d.selector);
      parent.each(function iterate() {
        target[d.name].push($(this.children).text());
      });
    };
  },
  Array: function Array(d) {
    var attributes = [];
    if (d.items.type === 'Object') {
      attributes = (0, _transform_markup.transform)(d.items, extractors);
    }
    return function (base, target, $) {
      var array = [];
      var newBase = d.base ? $(d.selector) : base.find(d.selector);

      if (typeof newBase.each === 'function') {
        if (d.items.type === 'Object') {
          newBase.each(function iterator() {
            var item = $(this);
            var obj = {};
            attributes.forEach(function (extractor) {
              extractor(item, obj, $);
            });
            array.push(obj);
          });
        } else {
          newBase.each(function iterator() {
            var item = $(this);
            var value = {};
            extractors[d.items.type](d.items)(item, value, $);
            if (Object.keys(value).length !== 0) array.push(value);
          });
        }
      }

      target[d.name] = array;
    };
  }
};

exports.default = extractors;