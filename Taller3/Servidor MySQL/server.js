const express = require('express');
const cors = require('cors')
const mysql = require('mysql2')

const app = express();

app.use(express.json())
app.use(cors())

var connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: '123',
    database: 'Usuarios',
    port: 3306
 });

 app.get("/Ver", async function(req, res){

    var sql = "select * from usuario"
    connection.query(sql, async function(error, respuesta){
        if (error) {
            console.log(error)
        } else {
            res.send(JSON.stringify(respuesta))
        }
    })

 });

 app.post("/Crear", async function(req, res){
    var sql = "insert into usuario(nombre) value('"+req.body.nombre+"')"
    connection.query(sql, async function(error, respuesta){
        if (error) {
            console.log(error)
        } else {
            res.send({MSG:"Creado"})
        }
    })
 })

 app.listen( 3001, (err) => {
    console.log('Server running on port ' + (3001))
});