var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = {
  create: function(req, res) {
    Question.findOne({_id: req.params.q_id}, function(err, question) {
      var answer = new Answer(req.body);
      answer._question = question._id;
      question.answers.push(answer);
      answer.save(function(err, data1) {
        question.save(function(err, data2) {
          if (err) {
            res.status(400).send('Answer was not saved into database');
          }
          else {
            res.sendStatus(200);
          }
        })
      })
    })
  },
  increment: function(req, res) {
    Answer.findOne({_id: req.params.a_id}, function(err, answer) {
      answer.likes += 1;
      answer.update({$set: {likes: answer.likes}}, function(err, answer) {
        if (err) {
          res.status(400).send('No one likes you');
        }
        else {
          res.sendStatus(200);
        }
      })
    })
  }
}
