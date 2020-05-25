const mysql = require('mysql2/promise');

async function getConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Profit@123',
    database: 'library',
  });
}


module.exports = {
  getConnection,
};
