const connection= require('../models/connection')

let productoModel = {}; 

// Obtener los productos
productoModel.getProductos = (callback) =>{
    if(connection){
        connection.query('SELECT * FROM PRODUCTO',
        (err, rows)=>{ 
            if(err){
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
};


// Obtener producto especifico por nombre
productoModel.getEspecificProduct = (idProducto, callback) =>{
    if(connection){
        connection.query('SELECT * FROM PRODUCTO WHERE PRODUCTO.id_producto = '+idProducto+'',
        (err, rows)=>{ 
            if(err){
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
};

module.exports = productoModel; 