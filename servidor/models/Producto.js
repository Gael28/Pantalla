 const mongoose = require ('mongoose');
 const ProductoSchema = mongoose.Schema({
     nombre: {
        type: String,
        required: true
     },
     numpersonas: {
        type: String,
        required: true
     },
     telefono: {
        type: String,
        required: true
     },
fechaCreacion: {
    type: Date,
    default: Date.now()
}
 });

 module.exports = mongoose.model('Producto', ProductoSchema);