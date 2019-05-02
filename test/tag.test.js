import request from 'supertest';
import status from 'http-status';
import { expect } from 'chai';

import app from '../app';
import Note from '../server/models/note.model';
import Tag from '../server/models/tag.model';

describe('## Tag API\'s', () => {
  let note = {
    title: 'TitleTest',
    content: 'ContentTest'
  };
  
  let tag = {
    name: 'TestTag'
  };

  let tag1 = {
    name: 'TestTag1'
  };

  const testTag = (res, tag, done) => {
    const id = res.body._id;
    const name = res.body.name;

    expect(id).to.equal(tag._id);
    expect(name).to.equal(tag.name);
    done();
  };

  before('Create test tag', () => 
    new Tag(tag1)
      .save()
      .then(savedTag => {
        tag1 = savedTag;
      }));

  describe('# POST /api/tags', () => {
    it('.../should create a new tag', done => {
      request(app)
        .post('/api/tags')
        .send(tag)
        .expect(status.OK)
        .then(res => {
          const name = res.body.name;
          expect(name).to.equal(tag.name);
          tag = res.body;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/tags', () => {
    it('...should get all the tags', done => {
      request(app)
        .get('/api/tags')
        .expect(status.OK)
        .then(res => {
          const receivedTags = res.body;
          expect(receivedTags[1]._id.toString()).to.equal(tag._id.toString())
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/tag/:id', () => {
    it('...should get a tag', done => {
      request(app)
        .get(`/api/tags/${tag._id}`)
        .expect(status.OK)
        .then(res => testTag(res, tag, done))
        .catch(done);
    });
  });

  describe('# GET /api/tag/:id/notes', () => {
    it('...should get the notes referencing a tag', done => {
      done();
    });
  });

  describe('# PUT /api/tag/:id', () => {
    it('...should update a tag', done => {
      tag.name = "newName";

      request(app)
        .put(`/api/tags/${tag._id}`)
        .send(tag)
        .expect(status.OK)
        .then(res => testTag(res, tag, done))
        .catch(done);
    });
  });

  describe('# DELETE /api/tag/:id', () => {
    // This should include the test of the removal of the tag referenced by the notes
    it('...should delete a tag', done => {
      request(app)
        .delete(`/api/tags/${tag._id}`)
        .expect(status.OK)
        .then(res => {
          expect(res.body).to.be.true;
          done();
        })
        .catch(done);
    });
  });
});
