/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Routes for the app. This contains all the routes 
which don't need authenticated
***********************************************************/

// expose the routes to our app with modules.exports

var log = require('../../utilities/log')

module.exports = function(router) {

  router.use(function(req, res, next) {
    log.info('In App router');
    log.info('%s %s %s', req.method, req.url, req.path);
    next();
  });

  // Home page for the site
  router.get('/', function(req, res) {
    res.render('default/views/home', {
      title: 'Merry Kit'
    });
  });

}
