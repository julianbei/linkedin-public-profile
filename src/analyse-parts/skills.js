var skillsAnalysis = function($, profile){
  // Skills
  profile.skills = [];
  $("#skills .pills li").each(function(){
    var skill = $(this);
    var more  =  skill.hasClass('see-more');
    var less  =  skill.hasClass('see-less');

    if(!more && !less){
      profile.skills.push(skill.text());
    }
  });
  return profile;
}
module.exports = skillsAnalysis;
