/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Routes for the seller. All routes need to 
authenticated first
***********************************************************/

// All these routes are prepended with /seller

var log = require('../../utilities/log');
var mkcommon = require('../../utilities/mkcommon');
var productapi = require('../../api/product.api');

module.exports = function(router, passport) {

  router.use(function(req, res, next) {
    log.info('In API router');
    log.info('%s %s %s', req.method, req.url, req.path);
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
    // res.render('common/views/seller/message', {
    //   title: 'Add product error',
    //   message: 'err.message'
    // });

    var productType = req.params.productType;
    var formData = req.body.formData;
    var productType = req.body.productType;

    productapi.addProduct(formData, productType, function(err, data) {
      if (err) {
        // res.render('common/views/seller/message', {
        //   title: 'Add product error',
        //   message: err.message
        // });

        res.status(400).json({
          'error': 'err.message'
        });
      } else {
        // res.render('common/views/seller/message', {
        //   title: 'Add product success',
        //   message: 'Product added successfully!! It\'ll reflect to users soon'
        // });
        res.json({
          'success': 'success'
        });
      }
    })
  });
}


// route middleware to make sure user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) {
    return next();
  }

  // if they aren't redirect them to the home page
  res.redirect('/seller');
}
