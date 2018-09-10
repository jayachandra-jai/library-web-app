const express = require('express');
const passport=require('passport');
const bookController = require('../controllers/book_controller');
const db = require('../bin/db_connection');
const { verifyToken } = require('../common/middlewhere');
// const { authorized } = require('../common/middlewhere');
require('../config/passport');

const booksRouter = express.Router();

booksRouter.get('/', async (req, res) => {
  console.log('hello');
  const result = await bookController.getBooks(await db.getConnection());
  // result.user_name = res.locals.user.user_name;
  result.user_name = 'Jai';
  res.render('books', result);
});


booksRouter.get('/:id', async (req, res) => {
  const result = await bookController.getBookById(await db.getConnection(), req.params.id);
  // result.user_name = res.locals.user.user_name;
  result.user_name = 'Jai';
  res.render('book_info', result);
});

module.exports = {
  booksRouter,
};
