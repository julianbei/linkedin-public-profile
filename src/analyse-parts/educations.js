'use strict';

export default function educationsAnalysis($, profile) {
  // Education
  profile.educations = [];
  $('#education .schools .school').each(function extract() {
    const $schoolItem = $(this);
    const school = {
      school: $schoolItem.find('.item-title').text(),
      course: $schoolItem.find('.item-subtitle').text(),
      from: $schoolItem.find('.meta .date-range time:nth-child(1)').text(),
      to: $schoolItem.find('.meta .date-range time:nth-child(2)').text(),
      description: $schoolItem.find('.description p').text(),
    };
    profile.educations.push(school);
  });

  return profile;
}
