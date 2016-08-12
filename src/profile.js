'use strict';

const baseAnalysis = require('./analyse-parts/base');
const featuredAnalysis = require('./analyse-parts/featured');
const positionsAnalysis = require('./analyse-parts/positions');
const skillsAnalysis = require('./analyse-parts/skills');
const educationsAnalysis = require('./analyse-parts/educations');

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

}

module.exports = Profile;
