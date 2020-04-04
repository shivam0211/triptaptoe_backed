const User = require('../models/User_model');

exports.addUser = (req, res, next) => {
  const User = new User({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  });
  User
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('User added successfully');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.showUser = (req, res, next) => {
  User.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.singleUser = (req, res, next) => {
  User.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.updateUser = (req, res, next) => {
  User.findById(req.body.id).then(result => {
    result.title = req.body.title;
    result.description = req.body.description;
    result.image = req.body.image;
    return result.save();
  }).then(User => {
    res.send('User updated successfully');
  }).catch(err => res.status(400).send(err));
};

exports.deleteUser = (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('User deleted');
    }).catch(err => res.status(400).send(err));
};