const updatedPlugin = schema =>
  schema
    .add({
      updated: {
        type: Date,
        default: Date.now
      }
    });

export default updatedPlugin;
