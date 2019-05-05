const updatedPlugin = schema => {
  schema
    .add({
      updated: {
        type: Date,
        default: Date.now
      }
    });

  schema.pre('findOneAndUpdate', function (next) {
    this._update.updated = new Date();
    next();
  })
}


export default updatedPlugin;
