/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Routes for the seller. All routes need to 
authenticated first
***********************************************************/

// All these routes are prepended with /seller

module.exports = function(router, passport) {

    router.use(function(req, res, next) {
        console.log('In Seller router');
        console.log('%s %s %s', req.method, req.url, req.path);

        next();
    });

    // Home page for the seller
    router.get('/', function(req, res) {
        res.render('common/views/seller/home', {
            title: 'Seller'
        });
    });

    router.route('/login')
        .get(function(req, res) {
            res.render('common/views/seller/login', {
                title: 'Login'
            })
        })
        .post(passport.authenticate('local-login', {
            successRedirect: '/seller/profile', // redirect to the secure profile section
            failureRedirect: '/seller/signup', // redirect back to the signup page if there is an error
            failureFlash: true // allow flash messages
        }))


    router.route('/signup')
        .get(function(req, res) {
            res.render('common/views/seller/signup', {
                title: 'Seller Signup'
            });
        })
        .post(passport.authenticate('local-signup', {
            successRedirect: '/seller/profile', // redirect to the secure profile section
            failureRedirect: '/seller/signup', // redirect back to the signup page if there is an error
            failureFlash: true // allow flash messages
        }));


    router.get('/profile', isLoggedIn, function(req, res) {

        res.render('common/views/seller/profile', {
            title: 'Seller Profile',
            user: req.user
        });
    });

    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
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
