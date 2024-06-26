require('dotenv').config();
const mysql = require('mysql');

const con = mysql.createConnection({
   
    //process.env.MYSQL_HOST,
   
    //process.env.MYSQL_USERNAME,
   
    //process.env.MYSQL_PASSWORD,
   
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
