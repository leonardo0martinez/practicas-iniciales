const mongoose = require('mongoose');
const url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`
mongoose.connect(url)

const db = mongoose.connection

db.on('error',console.error.bind(console,"Error al conectar Mongodb"))
db.once('open',function callback(){
    console.log("Conectado a Mongo");
})
module.exports= db