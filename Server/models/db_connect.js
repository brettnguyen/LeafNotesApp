//require('dotenv').config();
const dbConfig = require("../config/db.config.js");
const mysql = require('mysql2');
var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB

});
const query = (sql, binding) => {
  return new Promise((resolve, reject) => {
    con.query(sql, binding, (err, result, fields) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const createQuery = "CREATE DATABASE IF NOT EXISTS leaf_db;";
con.query(createQuery);





con.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});



module.exports = {con, connection, query}
/*
const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB

});

const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
      con.query(sql, binding, (err, result, fields) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  };
  
  const createQuery = "CREATE DATABASE IF NOT EXISTS leaf_db;";
  con.query(createQuery);

  





con.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
*/
  //module.exports = { con, query }