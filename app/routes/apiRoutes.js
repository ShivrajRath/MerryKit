// ROUTERS for the api
// =================================================================
// expose the routes for our api with modules.exports

module.exports = function(router) {

    router.use(function(req, res, next) {
        console.log('In Api router');
        console.log('%s %s %s', req.method, req.url, req.path);
        next();
    });


    var Seller = require('../models/seller.schema.js');

    router.route('/seller/signupold')
    // Submit the form
    .post(function(req, res) {
        var seller = new Seller();

        seller.email = req.body.email;
        seller.username = req.body.username;
        seller.password = req.body.password;

        seller.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.render('common/views/seller/registerconfirmation', {
                    title: 'Merry Kit',
                    message: 'Thank you! You are registered'
                });
            }
        });
    })
    .get(function(req, res) { // Get all sellers
        Seller.find(function(err, sellers) {
            if (err) {
                res.send(err);
            } else {
                res.json(sellers);
            }
        });
    })
};
