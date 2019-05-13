import request from 'supertest';
import status from 'http-status';
import { expect } from 'chai';

import app from '../app.js';

import Note from '../server/models/note.model';
import Tag from '../server/models/tag.model';

before('Clean up test data', () =>
  Promise.all([Note.deleteMany({}), Tag.deleteMany({})])
);

describe('# API health-check', () => {
  it('...should check if the server is up', done => {
    request(app)
      .get('/')
      .expect(status.OK)
      .then(res => {
        expect(res.body).to.equal(true);
        done();
      })
      .catch(done);
  });
});
