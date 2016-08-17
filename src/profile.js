'use strict';

import baseAnalysis from './analyse-parts/base';
import featuredAnalysis from './analyse-parts/featured';
import positionsAnalysis from './analyse-parts/positions';
import skillsAnalysis from './analyse-parts/skills';
import educationsAnalysis from './analyse-parts/educations';

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

export default Profile;
