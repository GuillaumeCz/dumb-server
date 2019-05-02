const createdPlugin = schema => 
  schema
    .add({
      created: {
        type: Date, 
        default: Date.now, 
        required: true
      }
    });

export default createdPlugin;
