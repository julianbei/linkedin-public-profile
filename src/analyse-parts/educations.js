var educationsAnalysis = function ($, profile) {
  // Education
  profile.educations = [];
  $('#education .schools .school').each(function () {
    var $schoolItem = $(this);
    var school = {
        school:       $schoolItem.find('.item-title').text(),
        course:       $schoolItem.find('.item-subtitle').text(),
        from:         $schoolItem.find('.meta .date-range time:nth-child(1)').text(),
        to:           $schoolItem.find('.meta .date-range time:nth-child(2)').text(),
        description:  $schoolItem.find('.description p').text(),
      };
    profile.educations.push(school);
  });

  return profile;
};

module.exports = educationsAnalysis;
