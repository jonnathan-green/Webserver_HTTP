const hbs = require('hbs');
const express = require('express')

const app = express()


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/Partials', function (err) {});   // Registrando los parciales

// servir conmtenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home',{
    nombre:' Jonnathan rodriguez',
    titulo: 'Aprendiendo Node.js '
  })
})

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre:' Jonnathan rodriguez',
    titulo: 'Aprendiendo Node.js '
  })
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre:' Jonnathan rodriguez',
    titulo: 'Aprendiendo Node.js '
  })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
  })
  

app.listen(8080)