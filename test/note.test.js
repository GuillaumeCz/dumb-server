import request from 'supertest';
import status from 'http-status';
import { expect } from 'chai';

import app from '../app.js';
import Note from '../server/notes/note.model.js';

describe('## Note API\'s', () => {
  let note = {
    title: 'TitleTest',
    content: 'ContentTest'
  };

  let note1 = {
    title: 'TitleTest1',
    content: 'ContentTest1'
  };

  const testNote = (_note, noteRef, done) => {
    // expect(_note._id).to.equal(noteRef._id);
    expect(_note.title).to.equal(noteRef.title);
    expect(_note.content).to.equal(noteRef.content);
    expect(_note).to.have.property('updated').to.not.be.undefined;
    expect(_note).to.have.property('created').to.not.be.undefined;
    done();
  };

  describe('# POST /api/notes', () => {
    before('Create test note', () => 
      new Note(note1)
        .save()
        .then(savedNote => {
          note1 = savedNote;
        }));

    it('...should create a new note', done => {
      const moment = new Date();
      request(app)
        .post('/api/notes')
        .send(note)
        .expect(status.OK)
        .then(res => {
          const resNote = res.body;

          expect(resNote.title).to.equal(note.title);
          expect(resNote.content).to.equal(note.content);
          expect(resNote).to.have.property('updated').to.not.be.undefined;
          expect(resNote).to.have.property('created').to.not.be.undefined;

          note = resNote;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/notes/', () => {
    it('...should get all the notes', done => {
      request(app)
        .get('/api/notes')
        .expect(status.OK)
        .then(res => {
          const receivedNotes = res.body;

          expect(receivedNotes).to.be.an('array');
          expect(receivedNotes[0]._id).to.equal(note1._id.toString());
          expect(receivedNotes[1]._id).to.equal(note._id.toString());

          done();
        })
        .catch(done)
    });
  });

  describe('# GET /api/notes/:id', () => {
    it('...should get note details', done => {
      request(app)
        .get(`/api/notes/${note._id}`)
        .expect(status.OK)
        .then(res => testNote(res.body, note, done))
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
    });
  });

  describe('# PUT /api/notes/:noteId', () => {
    it('...should update note details', done => {
      note.title = 'newTitle';
      note.content = 'newContent';

      request(app)
        .put(`/api/notes/${note._id}`)
        .send(note)
        .expect(status.OK)
        .then(res => {
          const resNote = res.body;
          expect(resNote.updated).to.not.equal(note.updated);
          expect(resNote.created).to.equal(note.created);
          testNote(resNote, note, done);
        })
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
