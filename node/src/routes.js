const { Router } = require('express')

const mysql = require('mysql')
const dbConfig = require('./config/db.config')

const routes = new Router()

routes.get('/', (req, res) => {

  const conn = mysql.createConnection(dbConfig);
  conn.connect(function (err) {
    if (err) throw err;

    conn.query("SELECT * FROM users", function (err, results, fields) {
      if (err) throw err;
      res.render('index', { results })
    });

    conn.end()

  });

})


module.exports = routes