const { logger } = require('../config/winston');
const con = require('./mongo_connect');


async function createTables() {
  const db = await con.connectDb();
  const dbo = db.db('mylibrary');

  try {
    await dbo.createCollection('users');
    logger.info('Users Collection created');
  } catch (err) {
    logger.error(err);
  }


  db.close();
}

createTables();
