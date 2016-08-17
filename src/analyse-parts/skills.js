'use strict';

export default function skillsAnalysis($, profile) {
  // Skills
  profile.skills = [];
  $('#skills .pills li').each(function extract() {
    const $skill = $(this);
    const more = $skill.hasClass('see-more');
    const less = $skill.hasClass('see-less');

    if (!more && !less) {
      profile.skills.push({ name: $skill.text() });
    }
  });

  return profile;
}
