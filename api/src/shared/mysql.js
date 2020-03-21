const mysql = require('mysql');

const options = {
  user: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT
};

const connectToDatabase = async () => {
  console.log('ADinu - LOG: options', options);
  mysql.createConnection(options).connect(err => {
    if (err) throw err;
    console.log(`Connected to the ${options.database} database`);
  });
};

module.exports = { connectToDatabase };
