'use strict';

export default function featuredAnalysis($, profile) {
  // util
  function extraInfo(subject) {
    const result = [];
    $(`.extra-info [data-section='${subject}'] td ol li`).each(function extract() {
      result.push($(this.children).text());
    });
    return result;
  }

  // Featured Info
  profile.featured_current = extraInfo('currentPositionsDetails');
  profile.featured_past = extraInfo('pastPositionsDetails');
  profile.featured_education = extraInfo('educationsDetails');

  return profile;
}
