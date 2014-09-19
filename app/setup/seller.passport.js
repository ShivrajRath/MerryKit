// config/passport.js

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the seller model
var Seller = require('../models/seller.schema');

// expose this function to our app using module.exports
module.exports = function(passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize sellers out of session

  // used to serialize the seller for the session
  passport.serializeUser(function(seller, done) {
    done(null, seller.id);
  });

  // used to deserialize the seller
  passport.deserializeUser(function(id, done) {
    Seller.findById(id, function(err, seller) {
      done(err, seller);
    });
  });

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-signup', new LocalStrategy({
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'selleremail',
      passwordField: 'sellerpassword',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      // find a seller whose email is the same as the forms email
      // we are checking to see if the seller trying to login already exists
      Seller.findOne({
        'email': email
      }, function(err, seller) {
        // if there are any errors, return the error
        if (err)
          return done(err);

        // check to see if theres already a seller with that email
        if (seller) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {

          // if there is no seller with that email
          // create the seller
          var newSeller = new Seller();

          // set the seller's local credentials
          newSeller.email = email;
          newSeller.password = newSeller.generateHash(password); // use the generateHash function in our seller model

          // save the seller
          newSeller.save(function(err) {
            if (err)
              throw err;
            return done(null, newSeller);
          });
        }

      });

    }));

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-login', new LocalStrategy({
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'selleremail',
      passwordField: 'sellerpassword',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

      // find a seller whose email is the same as the forms email
      // we are checking to see if the seller trying to login already exists
      Seller.findOne({
        'email': email
      }, function(err, seller) {
        // if there are any errors, return the error before anything else
        if (err)
          return done(err);

        // if no seller is found, return the message
        if (!seller)
          return done(null, false, req.flash('loginMessage', 'No seller found.')); // req.flash is the way to set flashdata using connect-flash

        // if the seller is found but the password is wrong
        if (!seller.validPassword(password))
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

        // all is well, return successful seller
        return done(null, seller);
      });

    }));
};
