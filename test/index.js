'use strict';
/* eslint-disable import/no-extraneous-dependencies */

import * as chai from 'chai';
import fs from 'fs';

// module
import linkedInProfile from '../src/index';

// fixtures
import resultProfile from './fixtures/profile_result';

let html = '';
const url = 'https://de.linkedin.com/in/julianamelung';

const expect = chai.expect;

describe('parser', () => {
  before(() => {
    html = fs.readFileSync('./test/fixtures/profile.html', 'utf8');
  });

  it('Should parse a profile', done => {
    linkedInProfile(html).then(profile => {
      expect(profile).to.eql(resultProfile);
      done();
    }).catch(done);
  });

  it('Should download and parse a profile', done => {
    linkedInProfile(url).then(profile => {
      expect(profile).to.eql(resultProfile);
      done();
    }).catch(done);
  });
});
