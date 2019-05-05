import status from 'http-status';

import Tag from './tag.model';

const getTags = (req, res, next) =>
  Tag.find({})
    .exec()
    .then(tags => res.json(tags))
    .catch(error => next(error));

const getTag = (req, res) =>
  Tag.findById(req.params.id)
    .exec()
    .then(tag => res.json(tag))
    .catch(() => res.status(status.NOT_FOUND).send({ error: 'Not found' }));

const addTag = (req, res, next) => {
  const name = req.body.name;

  const newTag = new Tag({
    name: name
  });
  
  return newTag.save()
    .then(tag => res.json(tag))
    .catch(err => next(err));
};

const editTag = (req, res, next) =>
  Tag.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(tag => res.json(tag))
    .catch(err => next(err));

const deleteTag = (req, res, next) =>
  Tag.findByIdAndDelete(req.params.id)
    .then(() => res.json(true))
    .catch(err => next(err));

export default { getTags, getTag, addTag, editTag, deleteTag };
