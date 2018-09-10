// const jwt = require('jsonwebtoken');

const passport=require('passport');

async function verifyToken(req, res, next) {

  passport.authenticate('jwt', {session: false}, function(user) {
    // if (err) return next(err);
    console.log(user);
    if(user !==null)
      next();
    else
      res.redirect('/');
  })(req, res, next);
}



module.exports = {
  verifyToken,
};
