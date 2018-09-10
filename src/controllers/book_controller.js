
async function getBooks(connection) {
  let result;
  try {
    result = await connection.execute('select book_id,title,books.pic_url,author_name  from books, authors where books.author_id=authors.author_id;');
    connection.end();
  } catch (error) {
    console.log(error);
  }

  return { books: result[0] };
}

async function getBookById(connection, id) {
  let result;
  try {
    result = await connection.execute(`select book_id,title,books.pic_url,author_name  from books, authors where books.author_id=authors.author_id AND books.book_id='${id}'`);
    connection.end();
  } catch (error) {
    console.log(error);
  }
  return (result[0])[0];
}


module.exports = {
  getBooks,
  getBookById,
};
