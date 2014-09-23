/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Routes for the seller. All routes need to 
authenticated first
***********************************************************/

// All these routes are prepended with /seller

var mkcommon = require('../../utilities/mkcommon.js');

module.exports = function(router, passport) {

  router.use(function(req, res, next) {
    console.log('In API router');
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
  });

  /**
   * Get categories json for a root category. This is based on file name
   */
  router.get('/getCategories/:productType', isLoggedIn, function(req, res) {
    var productType = req.params.productType;
    res.json(mkcommon.getCategories(productType));
  });

  /**
   * Posts a product to be saved to database.
   * The request should be validated before saving.
   */
  router.post('/addProduct/:productType', isLoggedIn, function(req, res) {
    var productType = req.params.productType;
    var data = req.body.formData;
    console.log(data);
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
