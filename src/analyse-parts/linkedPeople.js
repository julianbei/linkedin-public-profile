var linkedPeople = function ($, links) {
  var links = [];
  $('.browse-map .profile-card a').each(function () {
    var link = $(this).attr('href');
    links.push(link);
  });

  return links;
};

module.exports = linkedPeople;
