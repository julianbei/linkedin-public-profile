var Profile = require('./profile');
var linkedPeople = require('./analyse-parts/linkedPeople');

var analyse = function (window, url) {
  return new Promise(function(resolve, reject){
    try {
      var $ = window.$;
      var profile = new Profile($)
      .base()
      .featured()
      .positions()
      .skills()
      .educations()
      .clean();

      links = linkedPeople($);

      resolve({profile: profile, links: links})
    } catch (err) {
      reject(err)
    }
  });
};

module.exports = analyse;
