const http = require('http')

http.createServer((req, res) =>{

    //res.writeHead(200, {'Content-Type': 'application/json'})
    //res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'})   -->  Creacion de headers
    //res.write('id, nombre\n' ) Parte de descarga csv 
    //res.write('1, Karen\n')
    //res.write('2, Camilo\n' )
    //res.write('3, Juan\n' )

    res.writableObjectMode('Hola jonnathan ')
    res.end();
})

.listen( 8080 )

console.log('Este puerto escucha el', 8080);


//C:\Users\WINDOWS10\Documents\Jonnathan Green\Cursos\N ode.js\Seccion7_Webserver