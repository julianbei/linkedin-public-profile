var analyse = function (window, url) {
  return new Promise(function(resolve, reject){
    try {
      var links = [];
      var profile = {};
      var $ = window.$;
      profile.url                = $("link[rel='canonical']").attr("href");
      // Header Info
      profile.name               = $("h1#name").text();
      profile.headline           = $("p.headline.title").text();
      profile.location           = $("dl#demographics .descriptor.adr span.locality").text();
      profile.industry           = $("dl#demographics dd:nth-child(4)").text();

      // Picture
      profile.picture            = $("profile-picture img").attr('src');

      // Featured Info
      profile.featured_current   = $(".extra-info span.org").text();
      profile.featured_past      = $(".extra-info span.org").text();
      profile.featured_education = $(".extra-info [data-section='educations'] td ol li").text();
      profile.contacts           = $(".member-connections strong").text();
      // Experiences
      profile.positions = [];
      $("#experience .positions .position").each(function() {
          var positionItem = $(this);
          var position = {
            position:     positionItem.find(".item-title").text(),
            companyName:  positionItem.find(".item-subtitle").text(),
            dates: {
              from:       positionItem.find(".meta .date-range time:nth-child(1)").text(),
              to:         positionItem.find(".meta .date-range time:nth-child(2)").text()
            },
            locality:     positionItem.find(".meta .location").text(),
            description:  positionItem.find(".description").text(),
            current:      (positionItem.attr('data-section') == "currentPositions")
          };
          profile.positions.push(position);
      });

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

      // Education
      profile.educations = [];
      $("#education .schools .school").each(function() {
          var schoolItem = $(this);
          var school = {
            school:       schoolItem.find(".item-title").text(),
            course:       schoolItem.find(".item-subtitle").text(),
            dates: {
              from:       schoolItem.find(".meta .date-range time:nth-child(1)").text(),
              to:         schoolItem.find(".meta .date-range time:nth-child(2)").text()
            },
            description:  schoolItem.find(".description p").text()
          };
          profile.educations.push(school);
      });

      $('.browse-map .profile-card a').each(function(){
        var link = $(this).attr('href');
        links.push(link);
      });
      resolve({profile: profile, links: links})
    } catch (err) {
      reject(err)
    }
  });
};

module.exports = analyse;
