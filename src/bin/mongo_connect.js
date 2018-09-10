const { MongoClient } = require('mongodb');
const { logger } = require('../config/winston');
const { url } = require('../config/db');

async function connectDb() {
  let db;
  try {
    db = await MongoClient.connect(url, { useNewUrlParser: true });
    logger.info('Database Connected!');
  } catch (err) {
    logger.error(err);
  }
  return db;
}


module.exports = {
  connectDb,
};
