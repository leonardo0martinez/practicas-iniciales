const express = require('express');
const app = express();
const db = require("./database/db");
const cors = require('cors')
const persona = require("./database/model")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get('/', (req, res) => {
    persona.find({},(error,data)=>{
      if(error){
        res.send('Error mostrando los datos');
      }else{            
        res.send(JSON.stringify(data));
      }
    })       
    //res.send('Error mostrando los datos') >:v fue el error
})


app.listen(5000, () => {
  console.log('listening on: 5000');
})
