var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = mongoose.Schema({
  question: {type: String, required: true, minlength: 10},
  description: {type: String},
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true});

var UserSchema = mongoose.Schema({
  name: {type: String, required: true, minlength: 2}
  //answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true});

var AnswerSchema = mongoose.Schema({
  answer: {type: String, required: true, minlength: 5},
  details: {type: String},
  likes: {type: Number, default: 0},
  _responder: {type: Schema.Types.ObjectId, ref: 'User'},
  _question: {type: Schema.Types.ObjectId, ref: 'Question'}
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);
mongoose.model('User', UserSchema);
mongoose.model('Answer', AnswerSchema);
