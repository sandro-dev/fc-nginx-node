const express = require('express')
const routes = require('./routes')

const mysql = require('mysql')
const dbConfig = require('./config/db.config')

const app = new express()
app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use(express.json())
app.use(routes)

const conn = mysql.createConnection(dbConfig);

conn.connect(function (err) {
  if (err) throw err;

  const createTable = `CREATE TABLE IF NOT EXISTS users (id INT NOT NULL auto_increment, name VARCHAR(255), primary key(id))`
  conn.query(createTable)

  const insert = `INSERT INTO users(name) values('Sandro Santos')`
  conn.query(insert)
});

module.exports = app