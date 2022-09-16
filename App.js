const express = require('express')
const app = express()

// servir conmtenido estatico
app.use(express.static('public'))


app.get('/Hola_jonnathan', (req, res) => {
  res.send('Home Page')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
  })
  

app.listen(8080)