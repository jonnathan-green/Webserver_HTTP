const express = require('express')
const app = express()

app.set('view engine', 'hbs');

// servir conmtenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home',{
    nombre:' Jonnathan rodriguez',
    titulo: 'Aprendiendo Node.js '
  })
})

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
  })
  

app.listen(8080)