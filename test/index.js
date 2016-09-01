'use strict';
/* eslint-disable import/no-extraneous-dependencies */

import * as chai from 'chai';
import fs from 'fs';

// module
import linkedInProfile from '../src/index';

// fixtures
import resultProfile from './fixtures/profile_result';

const html = fs.readFileSync('./test/fixtures/profile.html', 'utf8');
// const url = 'https://de.linkedin.com/in/julianamelung';

const expect = chai.expect;


describe('parser', () => {
  let timing = 0;

  it('Should parse a profile', done => {
    const start = new Date();
    linkedInProfile(html, true).then(profile => {
      expect(profile).to.eql(resultProfile);
      timing = new Date() - start;
      done();
    }).catch(done);
  });

  it('Should parse a profile faster the second time', done => {
    const start = new Date();
    linkedInProfile(html, true).then(profile => {
      expect(profile).to.eql(resultProfile);
      const newTiming = new Date() - start;
      expect((newTiming < timing)).to.be.true;
      done();
    }).catch(done);
  });

  // it('Should download and parse a profile', done => {
  //   linkedInProfile(url).then(profile => {
  //     expect(profile).to.eql(resultProfile);
  //     done();
  //   }).catch(done);
  // });
});
