'use strict';

function linkedPeople($) {
  const links = [];
  $('.browse-map .profile-card a').each(() => {
    const link = $(this).attr('href');
    links.push(link);
  });

  return links;
}

module.exports = linkedPeople;
