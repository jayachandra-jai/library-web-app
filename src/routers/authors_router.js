
const express = require('express');
const { verifyToken } = require('../common/middlewhere');
const authorController = require('../controllers/author_controller');
const db = require('../bin/db_connection');

const authorsRouter = express.Router();


authorsRouter.get('/', async (req, res) => {
  const result = await authorController.getAuthors(await db.getConnection());
  // result.user_name = res.locals.user.user_name;
  result.user_name = 'jai';
  res.render('authors', result);
});


authorsRouter.get('/:id', async (req, res) => {
  const result = await authorController.getAuthorById(await db.getConnection(), req.params.id);
  // result.user_name = res.locals.user.user_name;
  result.user_name = 'jai';
  res.render('authors_info', result);
});

module.exports = {
  authorsRouter,
};
