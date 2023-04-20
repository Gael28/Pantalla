const express = require('express');
const conectarDB = require('./config/db');
 const cors = require("cors");
// Creamos el servidor
const app = express();
conectarDB ();
// Conectamos a la BD
app.use(express.json());

app.use(cors())

  app.use('/api/productos', require('./routes/producto'));


  

 
app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})