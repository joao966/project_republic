require('dotenv').config();
const connect = require('./connection');

const createHistory = async (liters, maters, user) => {
  const db = await connect();
  const result = await db.collection('users')
    .insertOne({ liters, maters, user });
  return result;
};

module.exports = {
  createHistory,
};