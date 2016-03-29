// Scrape a linkedin profile for the public contents
var Promise = require('bluebird');
var analyser = require('./analyser');
var retrieve = require('./retrieve');

function getProfile(param, withlinks) {
  return new Promise(function (resolve, reject) {

    retrieve(param)             // retrieve Profile
      .then(function (window) {
        return analyser(window);  // Analyse Page
      })
      .then(function (result) {
        if (withlinks) {
          resolve(result);        // resolve to obj: {profile, links}
        }else {
          resolve(result.profile);// resolve to profile
        }
      }).catch(function (err) {
        reject(err);
      });

  });
}

module.exports = getProfile;
