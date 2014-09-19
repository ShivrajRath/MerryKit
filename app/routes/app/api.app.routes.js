/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Routes for the seller. All routes need to 
authenticated first
***********************************************************/

// All these routes are prepended with /seller

var mkcomon = require('../../utilities/mkcommon.js');

module.exports = function(router, passport) {

  router.use(function(req, res, next) {
    console.log('In API router');
    console.log('%s %s %s', req.method, req.url, req.path);

    next();
  });

  // Home page for the seller
  router.get('/getCategories', isLoggedIn, function(req, res) {
    res.send("all categories");
  });
}


// route middleware to make sure
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) {
    return next();
  }

  // if they aren't redirect them to the home page
  res.redirect('/seller');
}
