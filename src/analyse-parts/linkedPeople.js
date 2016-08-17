'use strict';

export default function linkedPeople($) {
  const links = [];
  $('.browse-map .profile-card a').each(function extract() {
    const link = $(this).attr('href');
    links.push(link);
  });

  return links;
}
