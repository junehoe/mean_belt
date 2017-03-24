// require controllers
var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');

module.exports = function(app) {
  app.get('/users', users.index);
  app.post('/users', users.enter);
  app.get('/logout', users.logout);
  app.get('/current', users.current);
  app.get('/questions', questions.index);
  app.get('/questions/:id', questions.show);
  app.post('/questions', questions.create);
  app.put('/answers/:a_id', answers.increment);
  app.post('/answers/:q_id', answers.create);
}
