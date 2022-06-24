let User = require('../models/user');
let passport = require('passport');

// function getErrorMessage(err) {
//   console.log("===> Error: " + err);
//   let message = '';

//   if (err.code) {
//     switch (err.code) {
//       case 11000:
//       case 11001:
//         message = 'Username already exists';
//         break;
//       default:
//         message = 'Something went wrong';
//     }
//   } else {
//     for (var errName in err.errors) {
//       if (err.errors[errName].message) message = err.errors[errName].message;
//     }
//   }

//   return message;
// };

module.exports.renderSignin = function(req, res, next) {
  if (!req.user) {
    res.render('auth/signin', {
      title: 'Sign-in Form',
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    console.log(req.user);
    return res.redirect('/');
  }
};

module.exports.signout = function(req, res, next) {
  req.logout();
  res.redirect('/');
};

module.exports.signin = function(req, res, next){
  passport.authenticate('local', {   
    successRedirect: req.session.url || '/',
    failureRedirect: '/users/signin',
    failureFlash: true
  })(req, res, next);
  delete req.session.url;
}