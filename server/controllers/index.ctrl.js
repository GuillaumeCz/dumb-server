const index = (req, res) =>  {
  var blap = {
    hello: 'world'
  };
  return res.json(blap);
}

export default { index };
