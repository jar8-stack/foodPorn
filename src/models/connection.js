const mysql= require('mysql');

// Initialize pool
var pool =  mysql.createPool({
  connectionLimit : 10,
  host: 'host.docker.internal',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'foodPorn',
  debug    :  false
});    


module.exports = pool;