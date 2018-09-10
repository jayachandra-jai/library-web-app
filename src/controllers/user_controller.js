const bcrypt = require('bcrypt');
const { logger } = require('../config/winston');
const con = require('../bin/mongo_connect');


async function userRegistration(data, dbName) {
  const user = data;
  user.password = await bcrypt.hash(data.password, 10);
  const db = await con.connectDb();
  const dbo = db.db(dbName);
  try {
    await dbo.collection('users').insertOne(user);
    logger.info('User Document Inserted');
    db.close();
    return true;
  } catch (err) {
    logger.error(err);
  }
  return false;
}

async function userValidation(data, dbName) {
  const db = await con.connectDb();
  const dbo = db.db(dbName);
  const result = await dbo.collection('users').find({ user_email: data.user_name }).toArray();
  if (result.length !== 0) {
    if (await bcrypt.compare(data.password, result[0].password)) {
      return { user_name: result[0].user_name, user_email: result[0].user_email };
    }
  }
  return false;
}

module.exports = {
  userRegistration,
  userValidation,
};
