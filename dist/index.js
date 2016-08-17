'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = analyse;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _index = require('./parser/index');

var _index2 = _interopRequireDefault(_index);

var _public_profile = require('./templates/public_profile.json');

var _public_profile2 = _interopRequireDefault(_public_profile);

var _profile_links = require('./templates/profile_links.json');

var _profile_links2 = _interopRequireDefault(_profile_links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var profileParser = (0, _index2.default)(_public_profile2.default);
var linkParser = (0, _index2.default)(_profile_links2.default);

function analyse(window) {
  return new _bluebird2.default(function (resolve, reject) {
    try {
      var $ = window.$;
      var profile = profileParser($);
      var links = linkParser($);
      resolve({ profile: profile, links: links });
    } catch (err) {
      reject(err);
    }
  });
}
'use strict';

// Scrape a linkedin profile for the public contents

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProfile;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _analyser = require('./analyser');

var _analyser2 = _interopRequireDefault(_analyser);

var _load = require('./load');

var _load2 = _interopRequireDefault(_load);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProfile(param, withlinks) {
  return (0, _load2.default)(param) // retrieve Profile
  .then(function (window) {
    return (0, _analyser2.default)(window);
  }) // Analyse Page
  .then(function (result) {
    if (withlinks) return _bluebird2.default.resolve(result); // resolve to obj: {profile, links}
    return _bluebird2.default.resolve(result.profile); // resolve to profile
  });
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialize;

var _inputs = require('./util/inputs');

var _inputs2 = _interopRequireDefault(_inputs);

var _window = require('./util/window');

var _window2 = _interopRequireDefault(_window);

var _retrieve = require('./antiblock/retrieve');

var _retrieve2 = _interopRequireDefault(_retrieve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize(param) {
  if (!(0, _inputs2.default)(param)) return _window2.default.load(param);
  return (0, _retrieve2.default)(param).then(function (html) {
    return _window2.default.load(html);
  });
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = headers;
function headers() {
  return {
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'de-DE,de;q=0.8,en-US;q=0.6,en;q=0.4',
    'Cache-Control': 'max-age=0'
  };
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = build;
var baseUrl = 'https://www.linkedin.com/in/';

function build(link) {
  var position = link.indexOf('/in/') + 4;
  var params = link.indexOf('?');
  var member = '';
  if (params === -1) {
    member = link.substring(position);
  } else {
    member = link.substring(position, params);
  }
  return '' + baseUrl + member;
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = retrieve;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _useragents = require('./useragents');

var _useragents2 = _interopRequireDefault(_useragents);

var _linkedInUrl = require('./linkedInUrl');

var _linkedInUrl2 = _interopRequireDefault(_linkedInUrl);

var _headers = require('./headers');

var _headers2 = _interopRequireDefault(_headers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var method = 'GET';
var gzip = true;

function retrieve(link) {
  var url = (0, _linkedInUrl2.default)(link);
  var headers = Object.assign({}, _headers2.default, {
    'User-Agent': (0, _useragents2.default)()
  });
  return (0, _requestPromise2.default)({ url: url, method: method, headers: headers, gzip: gzip });
}
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = build;

var _transform_markup = require('./transform_markup');

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function build(base) {
  var keys = (0, _transform_markup.transform)(base.markup, _types2.default);
  return function parse($) {
    var result = {};
    keys.forEach(function (extractor) {
      return extractor($('body'), result, $);
    });
    return result;
  };
}
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
'use strict';
/* eslint no-useless-escape: 0*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;
var urlpattern = '^((https|http|ftp|rtsp|mms)?://)' + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + '(([0-9]{1,3}\.){3}[0-9]{1,3}' + '|' + "([0-9a-z_!~*'()-]+\.)*" + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.' + '[a-z]{2,6})' + '(:[0-9]{1,4})?' + '((/?)|' + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
var urlRegex = new RegExp(urlpattern);

function isURL(param) {
  return urlRegex.test(param);
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function load(html) {
  return new _bluebird2.default(function (resolve, reject) {
    function callback(errors, window) {
      if (errors) reject(errors);
      resolve(window);
    }

    try {
      _jsdom2.default.env(html, ['http://code.jquery.com/jquery.js'], callback);
    } catch (err) {
      reject(err);
    }
  });
}

exports.default = { load: load };