var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
  index: function(req, res) {
    Question.find({}, function(err, question) {
      if (err) {
        res.status(400).send('Something went wrong');
      }
      else {
        res.json(question);
      }
    })
  },
  create: function(req, res) {
    var question = new Question(req.body);
    question.save(function(err, data) {
      if (err) {
        res.status(400).send('Question was not saved into the database');
      }
      else {
        res.sendStatus(200);
      }
    })
  },
  show: function(req, res) {
    Question.findOne({_id: req.params.id}).populate({path: 'answers', populate: {path: '_responder'}}).exec(function(err, data) {
      if (data == null) {
        res.status(400).send('No question found');
      }
      else {
        res.json(data);
      }
    })
  }
}
