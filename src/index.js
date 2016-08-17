'use strict';

// Scrape a linkedin profile for the public contents
import Promise from 'bluebird';
import analyser from './analyser';
import load from './load';

export default function getProfile(param, withlinks) {
  return load(param)             // retrieve Profile
      .then(window => analyser(window)) // Analyse Page
      .then(result => {
        if (withlinks) return Promise.resolve(result);  // resolve to obj: {profile, links}
        return Promise.resolve(result.profile);         // resolve to profile
      });
}
