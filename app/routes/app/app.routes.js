/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Routes for the app. This contains all the routes 
which don't need authenticated
***********************************************************/

// expose the routes to our app with modules.exports

module.exports = function(router) {

    router.use(function(req, res, next) {
        console.log('In App router');
        console.log('%s %s %s', req.method, req.url, req.path);
        next();
    });

    // Home page for the site
    router.get('/', function(req, res) {
        res.render('default/views/home', {
            title: 'Merry Kit'
        });
    });

    // Home page for the seller
    router.get('/seller', function(req, res) {
        res.render('common/views/seller/home', {
            title: 'Seller'
        });
    });
}
