/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: All routing logic defined from here
***********************************************************/


module.exports = function(app, express, passport) {
  // APP ROUTER Instantiation
  // This router is to handle all the app calls to render pages
  var appRouter = express.Router();
  app.use('/', appRouter);

  require('./app/app.routes')(appRouter);

  // Seller ROUTER Instatiation
  // This router is to handle all our seller calls
  var sellerRouter = express.Router();
  // Only applicable to /seller calls
  app.use('/seller', sellerRouter);
  require('./app/seller.app.routes')(sellerRouter, passport);

  // API ROUTER Instatiation
  // This router is to handle all our api calls
  var apiRoute = express.Router();
  // Only applicable to /seller calls
  app.use('/api', apiRoute);
  require('./app/api.app.routes')(apiRoute, passport);

  //The 404 Route (ALWAYS Keep this as the last route)
  app.get('*', function(req, res) {
    res.status(404).send('This page was not found, please contact @shivrajrath');
  });
}
