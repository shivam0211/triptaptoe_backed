const __ModelName = require('../models/__ModelSmallName_model');

exports.add__ModelName = (req, res, next) => {
  const __ModelSmallName = new __ModelName({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  });
  __ModelSmallName
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('__ModelSmallName added successfully');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.show__ModelName = (req, res, next) => {
  __ModelName.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.single__ModelName = (req, res, next) => {
  __ModelName.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.update__ModelName = (req, res, next) => {
  __ModelName.findById(req.body.id).then(result => {
    result.title = req.body.title;
    result.description = req.body.description;
    result.image = req.body.image;
    return result.save();
  }).then(__ModelSmallName => {
    res.send('__ModelSmallName updated successfully');
  }).catch(err => res.status(400).send(err));
};

exports.delete__ModelName = (req, res, next) => {
  __ModelName.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('__ModelSmallName deleted');
    }).catch(err => res.status(400).send(err));
};