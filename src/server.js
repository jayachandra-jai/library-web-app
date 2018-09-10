const express = require('express');
const parser = require('body-parser');
const jwt = require('jsonwebtoken');
const passport=require('passport');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const winston = require('./config/winston');
const { logger } = require('./config/winston');
const { verifyToken }=require('./common/middlewhere');

const { booksRouter } = require('./routers/books_router');
const { authorsRouter } = require('./routers/authors_router');
const { authonticateRouter } = require('./routers/authonticate_router');
require('./config/passport');
const app = express();


app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(cookieParser());
app.use(morgan('combined', { stream: winston.logger.stream }));
app.use(passport.initialize());

app.use(express.static('src/public'));

app.set('views', 'src/views');
app.set('view engine', 'ejs');


app.use('/books', verifyToken, booksRouter);
// app.use('/authors', authorsRouter);
app.use('/authors',verifyToken, authorsRouter);
app.use('/', authonticateRouter);

// app.use('/', authonticateRouter);



app.get('/', async (req, res) => {
    res.render('index');
  
});



app.listen(9090);
