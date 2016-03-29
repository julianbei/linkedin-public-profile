'use strict';

var baseAnalysis = require('./analyse-parts/base');
var featuredAnalysis = require('./analyse-parts/featured');
var positionsAnalysis = require('./analyse-parts/positions');
var skillsAnalysis = require('./analyse-parts/skills');
var educationsAnalysis = require('./analyse-parts/educations');

class Profile {
  constructor($) {
    this.$ = $;
  }

  base() {
    return baseAnalysis(this.$, this);
  }

  featured() {
    return featuredAnalysis(this.$, this);
  }

  positions() {
    return positionsAnalysis(this.$, this);
  }

  skills() {
    return skillsAnalysis(this.$, this);
  }

  educations() {
    return educationsAnalysis(this.$, this);
  }

  clean() {
    delete this.$;
    return this;
  }

};

module.exports = Profile;
