import uuidv1 from 'uuid/v1';

export default class Note {
  constructor(_title) {
    this.id = uuidv1();
    this.title = _title;
  }
};
