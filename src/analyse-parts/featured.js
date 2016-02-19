var featuredAnalysis = function($, profile){
  // Featured Info
  profile.featured_current   = $(".extra-info span.org").text();
  profile.featured_past      = $(".extra-info span.org").text();
  profile.featured_education = $(".extra-info [data-section='educations'] td ol li").text();

  return profile;
}
module.exports = featuredAnalysis;
