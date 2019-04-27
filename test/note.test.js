import request from 'supertest';
import status from 'http-status';
import { expect } from 'chai';

import app from '../app.js';
import Note from '../models/note.model.js';

describe('## Note API\'s', () => {
  let note = {
    title: 'TitleTest',
    content: 'ContentTest'
  };

  let note1 = {
    title: 'TitleTest1',
    content: 'ContentTest1'
  };

  let note2 = {
    title: 'TitleTest2',
    content: 'ContentTest2'
  };


  const testNote = (res, noteRef, done) => {
    const id = res.body._id;
    const title = res.body.title;
    const content = res.body.content;

    expect(id).to.equal(noteRef._id);
    expect(title).to.equal(noteRef.title);
    expect(content).to.equal(noteRef.content);

    done();
  };

  describe('# POST /api/notes', () => {
    before('Create test note', () => 
      new Note(note2)
        .save()
        .then(savedNote => {
          note2 = savedNote;
        }));

    it('...should create a new note', done => {
      request(app)
        .post('/api/notes')
        .send(note)
        .expect(status.OK)
        .then(res => {
          const title = res.body.title;
          const content = res.body.content;

          expect(title).to.equal(note.title);
          expect(content).to.equal(note.content);

          note = res.body;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/notes/:noteId', () => {
    it('...should get note details', done => {
      request(app)
        .get(`/api/notes/${note._id}`)
        .expect(status.OK)
        .then(res => testNote(res, note, done))
        .catch(done);
    });

    it('...should report error with message - Not found, when note does not exists', done => {
      request(app)
        .get('/api/notes/xxxxxx')
        .expect(status.NOT_FOUND)
        .then(res => {
          expect(res.body.error).to.equal('Not found');
          done();
        })
        .catch(done);
    })
  });

  describe('# PUT /api/notes/:noteId', () => {
    it('...should update note details', done => {
      note.title = 'newTitle';
      note.content = 'newContent';

      request(app)
        .put(`/api/notes/${note._id}`)
        .send(note)
        .expect(status.OK)
        .then(res => testNote(res, note, done))
        .catch(done);
    });
  });

  describe('# DELETE /api/notes/:noteId', () => {
    it('...should delete note', done => {
      request(app)
        .delete(`/api/notes/${note._id}`)
        .expect(status.OK)
        .then(res => {
          expect(res.body).to.be.true;
          done();
        })
        .catch(done);
    });
  });
});
