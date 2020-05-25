const mysql = require('mysql2/promise');

async function main() {
  try {
    let connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Profit@123',
    });

    await connection.execute('CREATE DATABASE IF NOT EXISTS library');
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Profit@123',
      database: 'library',
    });


    const createAuthor = 'CREATE TABLE IF NOT EXISTS authors (`author_id` varchar(45) NOT NULL, `author_name` varchar(45) DEFAULT NULL, `category` varchar(45) DEFAULT NULL, `pic_url` varchar(45) DEFAULT NULL, PRIMARY KEY (`author_id`), UNIQUE KEY `author_id_UNIQUE` (`author_id`))';
    const createBook = 'CREATE TABLE IF NOT EXISTS `books` (`title` varchar(45) DEFAULT NULL, `author_id` varchar(45) DEFAULT NULL, `pic_url` varchar(45) DEFAULT NULL, `book_id` varchar(45) NOT NULL, PRIMARY KEY (`book_id`), UNIQUE KEY `book_id_UNIQUE` (`book_id`), KEY `fk_author_id` (`author_id`), CONSTRAINT `fk_author_id` FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`) ON UPDATE CASCADE )';

    await connection.execute(createAuthor);
    await connection.execute(createBook);
    console.log('Database Setup sucessfully');
  } catch (error) {
    console.log(`Database Setup Failure:${error}`);
  }
}

main();
