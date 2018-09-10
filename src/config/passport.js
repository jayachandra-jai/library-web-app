
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const user_controller = require('../controllers/user_controller');
passport.use(new LocalStrategy(
    async (username, password, done) =>{
       user=await user_controller.userValidation({user_name:username, password:password}, 'mylibrary');
        if (user===false) { return done(null, false); }
        return done(null, user);
    }
  ));

  
var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies) token = req.cookies['JWT'];
    return token;
  };

passport.use(new JWTStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey   : 'mysecret'
},
function (jwtPayload, done) {
    console.log(jwtPayload);
    return done(jwtPayload);
}
));
