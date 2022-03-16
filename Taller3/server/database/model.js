const { Schema, model } = require('mongoose');

const persona = new Schema({
    Nombre: String,
    Apellidos: String,
    Edad: Number,    
})
//'persona' es el nombre de la colección en mongodb
module.exports = model('personas', persona)