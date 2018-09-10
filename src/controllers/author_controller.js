

async function getAuthors(connection) {
  let result;
  try {
    result = await connection.execute('SELECT * FROM authors');
  } catch (error) {
    console.log(error);
  }
  return { authors: result[0] };
}

async function getAuthorById(connection, id) {
  let result;
  try {
    result = await connection.execute(`SELECT * FROM authors where author_id='${id}'`);
  } catch (error) {
    console.log(error);
  }
  return (result[0])[0];
}


module.exports = {
  getAuthors,
  getAuthorById,
};
