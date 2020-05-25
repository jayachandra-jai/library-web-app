const { expect } = require('chai');
const mysql = require('mysql2/promise');
const bookController = require('../src/controllers/book_controller');
const authorController = require('../src/controllers/author_controller');
const userController = require('../src/controllers/user_controller');

function getConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Profit@123',
    database: 'library',
  });
}

describe('getBooks', () => {
  it('should get all Books From Database', async () => {
    const output = {
      books:
        [{
          book_id: 'bid1',
          title: 'Java Tutorials',
          pic_url: 'pics/book1',
          author_name: 'Jai',
        },
        {
          book_id: 'bid2',
          title: 'Js Tutorials',
          pic_url: 'pics/book2',
          author_name: 'Jai',
        },
        {
          book_id: 'bid4',
          title: 'eJs Tutorials',
          pic_url: 'pics/book4',
          author_name: 'kili',
        },
        {
          book_id: 'bid5',
          title: 'CSS Tutorials',
          pic_url: 'pics/book6',
          author_name: 'kili',
        },
        {
          book_id: 'bid6',
          title: 'CSS Tutorials',
          pic_url: 'pics/book6',
          author_name: 'Chandu',
        },
        ],
    };
    const result = await bookController.getBooks(await getConnection());
    expect(output).deep.equal(result);
  });
});


describe('getBookById', () => {
  it('should get Book From Database with given Id', async () => {
    const output = {
      book_id: 'bid2',
      title: 'Js Tutorials',
      pic_url: 'pics/book2',
      author_name: 'Jai',
    };
    const result = await bookController.getBookById(await getConnection(), 'bid2');
    expect(output).deep.equal(result);
  });
});


describe('getAuthors', () => {
  it('should get all Authors From Database', async () => {
    const output = {
      authors:
        [{
          author_id: 'aid1',
          author_name: 'Jai',
          category: 'Computers',
          pic_url: 'pics/authors',
        },
        {
          author_id: 'aid2',
          author_name: 'Chandu',
          category: 'Computers',
          pic_url: 'pics/authors1.jpg',
        },
        {
          author_id: 'aid3',
          author_name: 'kili',
          category: 'Arts',
          pic_url: 'pics/authors2.jpg',
        }],
    };
    const result = await authorController.getAuthors(await getConnection());
    expect(output).deep.equal(result);
  });
});


describe('getAuthorById', () => {
  it('should get Author From Database with given Id', async () => {
    const output = {
      author_id: 'aid2',
      author_name: 'Chandu',
      category: 'Computers',
      pic_url: 'pics/authors1.jpg',
    };
    const result = await authorController.getAuthorById(await getConnection(), 'aid2');
    expect(output).deep.equal(result);
  });
});


describe('userRegistration', () => {
  it('It should return true if data is Inserted', async () => {
    const input = { user_name: 'chandu', user_email: 'Mine@mail.com', password: '1234' };
    const output = true;
    const result = await userController.userRegistration(input, 'testDb');
    expect(output).deep.equal(result);
  });
});

describe('userValidation', () => {
  it('It should return user details if input is correct', async () => {
    const input = { user_name: 'Mine@mail.com', password: '1234' };
    const output = { user_name: 'chandu', user_email: 'Mine@mail.com' };
    const result = await userController.userValidation(input, 'testDb');
    expect(output).deep.equal(result);
  });
  it('It should return false as input is incorrect', async () => {
    const input = { user_name: 'Mine@mail.com', password: '124' };
    const output = false;
    const result = await userController.userValidation(input, 'testDb');
    expect(output).deep.equal(result);
  });
});
