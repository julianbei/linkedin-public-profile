var baseAnalysis = function ($, profile) {
  profile.url                = $("link[rel='canonical']").attr('href');
  profile.contacts           = $('.member-connections strong').text();

  // Header Info
  profile.name               = $('h1#name').text();
  profile.headline           = $('p.headline.title').text();
  profile.location           = $('dl#demographics .descriptor.adr span.locality').text();
  profile.industry           = $('dl#demographics dd:nth-child(4)').text();

  // Picture
  try {
    profile.picture          = $('.profile-picture img')[0].attributes['data-delayed-url']._nodeValue;
  } catch (err) {
    profile.picture          = '';
  }

  return profile;
};

module.exports = baseAnalysis;
