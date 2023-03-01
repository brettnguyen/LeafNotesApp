require('dotenv').config();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    //process.env.MYSQL_HOST,
    user: "b7e5bdaf2e25d4",
    //process.env.MYSQL_USERNAME,
    password: "aa202eff",
    //process.env.MYSQL_PASSWORD,
    database: "heroku_94b3a6f5a7b4ee4"
    //process.env.MYSQL_DB

});

const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
      con.query(sql, binding, (err, result, fields) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  };
  
  //const createQuery = "CREATE DATABASE IF NOT EXISTS heroku_94b3a6f5a7b4ee4";
  //"CREATE DATABASE IF NOT EXISTS leaf_db;";
  //con.query(createQuery);

  





con.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

  module.exports = { con, query }