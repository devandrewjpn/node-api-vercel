import express from "express";
import mysql from 'mysql'

const app = express()

const connection  = mysql.createConnection({
    host: 'srv1075.hstgr.io',
    user: 'u990319036_astaton',
    password: 'Aem!9090',
    database: 'u990319036_todaylist'
  })

  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conectado ao banco de dados');
    }
  });

app.get('/api', (req, res) => {
    try {
        connection.query('SELECT * FROM items', (error, results) => {
            res.json(results)
        });
      } catch (err) {
        res.json(err)
      }
})

app.get('/api/about', (req, res) => {
  res.send('This is my about route..... ')
})

export default app