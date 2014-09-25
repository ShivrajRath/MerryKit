/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Creates the server for the app to run
***********************************************************/

'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  passport = require('passport'),
  flash = require('connect-flash'),
  mongoose = require("mongoose"),
  session = require('express-session'),
  path = require('path'),
  log = require('./app/utilities/log');

// Express app
var app = express();

/******************************************************************************
Getting data from config file
*****************************************************************************/
var config = require('./app/config/app.json')[app.get('env')];

/******************************************************************************
Mongoose ORM to connect to mongo db
*****************************************************************************/

var mongoURI = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL || config.mongooseHost;

mongoose.connect(mongoURI);

/******************************************************************************
Passport for route authentication
*****************************************************************************/

//passport for configuration
require('./app/setup/seller.passport.js')(passport);

// session secret
app.use(session({
  secret: 'kitmerrysashbhpa',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
// persistent login sessions
app.use(passport.session());
// use connect-flash for flash messages stored in session
app.use(flash());

/******************************************************************************
App middleware
*****************************************************************************/

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));


/******************************************************************************
Path for client side resources
*****************************************************************************/

app.use(express.static(path.join(__dirname, 'public')));

/******************************************************************************
View engine setup
*****************************************************************************/

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

/******************************************************************************
All routing logic defined from here
*****************************************************************************/
require('./app/routes/index')(app, express, passport);

/******************************************************************************
Starting the server
*****************************************************************************/

var port = process.env.PORT || config.port;
app.listen(port);
log.info('Application started on port: ' + port);
