const Producto = require("../models/Producto");




exports.crearProducto = async (req, res)=> {
    try{
         let producto;
         producto = new Producto(req.body);

        await producto.save()
        res.send(producto);





    } catch(error){
        console.log(error);
        res.status(500).send('hubo un error')
    }
}

exports.obtenerProductos = async(req,res) => {

    try{
        const productos = await Producto.find();
        res.json(productos)


    }catch(error){
        console.log(error);
        res.status(500).send('hubo un error')
    }

}

exports.actualizarProducto = async(req,res) => {
try{
    const  { nombre, numpersonas, telefono } =req.body;
    let producto = await Producto.findById(req.params.id);

    if(!producto){
        res.status(400).json({msg: 'No existe'})
    }
    producto.nombre = nombre;
    producto.numpersonas = numpersonas;
    producto.telefono = telefono;

    producto = await Producto.findOneAndUpdate({_id: req.params.id }, producto,{ new: true})
    res.json(producto);



}catch(error){
        console.log(error);
        res.status(500).send('hubo un error')
    }


}

exports.obtenerProducto = async(req,res) => {
    try{
         let producto = await Producto.findById(req.params.id);
    
        if(!producto){
            res.status(400).json({msg: 'No existe'})
        }
         
        res.json(producto);
    
    
    
    }catch(error){
            console.log(error);
            res.status(500).send('hubo un error')
        }
    
    
    }
    
    exports.eliminarProducto = async(req,res) => {
        try{
             let producto = await Producto.findById(req.params.id);
        
            if(!producto){
                res.status(400).json({msg: 'No existe'})
            }
             await Producto.findOneAndDelete({ _id: req.params.id })
            res.json({msg: 'Eliminado con exito'});
        
        
        
        }catch(error){
                console.log(error);
                res.status(500).send('hubo un error')
            }
        
        
        }