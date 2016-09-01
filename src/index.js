'use strict';

// Scrape a linkedin profile for the public contents
import load from './load';

export default function getProfile(param, withlinks) {
  return load(param)             // retrieve Profile
      .then(profile => {
        if (!withlinks) delete profile.links;
        return Promise.resolve(profile);         // resolve to profile
      });
}
