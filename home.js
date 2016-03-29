var LinkedInProfile = require('./index');

var url = 'https://de.linkedin.com/in/julian-beisenk%C3%B6tter-77038939';

// standard usage
LinkedInProfile(url).then(function (profile) {  // chain your logic
  console.log(profile);
});

// With links to similar profiles
LinkedInProfile(url, true)
.then(function (result) {
  console.log(result.profile);  // the requested profile
  console.log(result.links);    // the featured profiles on the page
});

// usage with HTML
var request = require('request-promise');

request(url)									// request with html output
.then(function (html) {					// promise chain
  return LinkedInProfile(html);// return the LinkedInProfile promise
})
.then(function (profile) {			// chain your logic
  console.log(profile);
});
