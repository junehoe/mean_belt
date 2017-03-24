var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var app = express();

var sessionConfig = {
  secret: 'MEI_IS_BEAST',
  resave: false,
  saveUninitialized: true,
  name: 'ooomeiCookie',
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000000
  }
}

app.use(session(sessionConfig));

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log('listening on port 8000');
});
