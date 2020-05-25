// const { MongoClient } = require('mongodb');
// const { logger } = require('../config/winston');
// const { url } = require('../config/db');
// const model = require('../models/model');


// MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
//   if (err) throw err;
//   const dbo = db.db('mylibrary');
//   dbo.collection('books').insertMany(model.books_data, (errr) => {
//     if (err) throw errr;
//     logger.info('Documents inserted');
//     db.close();
//   });
//   dbo.collection('authors').insertMany(model.authors_data, (errr) => {
//     if (err) throw errr;
//     logger.info('Documents inserted');
//     db.close();
//   });
// });


const mysql = require('mysql2/promise');
var model = require('../models/model');

async function main() {
  try{
    var connection=await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Profit@123",
        database: "library"
    });


    for(var data of model.authors_data){
      await connection.execute("INSERT INTO `authors` (author_id,author_name,category,pic_url) VALUES ('"+data.author_id+"','"+data.author_name+"','"+data.category+"','"+data.pic_url+"')");
    }
    console.log('Authors Data insert sucessfully');

    for(var data of model.books_data){
        await connection.execute("INSERT INTO `books` (book_id,title,author_id,pic_url) VALUES ('"+data.book_id+"','"+data.title+"','"+data.author_id+"','"+data.pic_url+"')");
    }

    console.log('Books Data insert sucessfully');


  }
  catch(error){
    console.log(error);
  }
}

main();
