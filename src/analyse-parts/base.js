'use strict';

export default function baseAnalysis($, profile) {
  profile.url = $("link[rel='canonical']").attr('href');
  profile.contacts = $('.member-connections strong').text();

  // Header Info
  profile.name = $('h1#name').text();
  profile.headline = $('p.headline.title').text();
  profile.location = $('dl#demographics .descriptor.adr span.locality').text();
  profile.industry = $('dl#demographics dd:nth-child(4)').text();

  // Picture
  /* eslint no-underscore-dangle: ["error", { "allow": ["_nodeValue"] }]*/
  try {
    profile.picture = $('.profile-picture img').attr('data-delayed-url');
  } catch (err) {
    profile.picture = '';
  }
  return profile;
}
