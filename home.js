'use strict';
/* eslint no-console: 0*/

const linkedInProfile = require('./dist/index').default;

const url = 'https://de.linkedin.com/in/julianamelung';

// standard usage
linkedInProfile(url).then(profile => {  // chain your logic
  console.log(profile);
});

// // With links to similar profiles
// linkedInProfile(url, true)
// .then(result => {
//   console.log(result.profile);  // the requested profile
//   console.log(result.links);    // the featured profiles on the page
// });

// // usage with HTML
// console.log('with html input');
// const request = require('request-promise');
//
// request(url)									// request with html output
// // make sure to use a user-agent etc.
// // return the LinkedInProfile promise
// .then(html => linkedInProfile(html))
// // promise chain
// .then(profile => { // chain your logic
//   console.log(profile);
// });
