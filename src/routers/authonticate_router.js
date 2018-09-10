const express = require('express');
const jwt = require('jsonwebtoken');
const passport=require('passport');
const userController = require('../controllers/user_controller');


const authonticateRouter = express.Router();


authonticateRouter.get('/signupPage', async (req, res) => {
  res.render('signupPage');
});

authonticateRouter.post('/signup', async (req, res) => {
  const flag = await userController.userRegistration(req.body, 'mylibrary');
  if (flag) {
    res.render('index', { title: 'Welcome to Indain Library' });
  } else {
    res.send('data not inserted');
  }
});



authonticateRouter.post('/login', passport.authenticate('local', { session: false, failureRedirect: '/' }),(req, res) => {
  const token = jwt.sign({ data: user, test: true }, 'mysecret');
  res.cookie('JWT',token);
 res.redirect('books');
});



authonticateRouter.get('/logout', async (req, res) => {
  res.clearCookie('JWT');
  res.redirect('/');
});

module.exports = {
  authonticateRouter,
};
