const connection= require('../models/connection')

let productoCategoriaModel = {}; 

// Obtener los productos de categorias
productoCategoriaModel.getProductoCategoria = (callback) =>{
    if(connection){
        connection.query('SELECT * FROM PRODUCTO_CATEGORIA',
        (err, rows)=>{ 
            if(err){
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
};

//Obtener productos por categoria
productoCategoriaModel.getProductoCategoriaSpecific = (categoryName, callback) =>{
    if(connection){
        connection.query('SELECT * FROM ((PRODUCTO INNER JOIN PRODUCTO_CATEGORIA ON PRODUCTO.id_producto = PRODUCTO_CATEGORIA.id_producto) INNER JOIN CATEGORIA ON PRODUCTO_CATEGORIA.id_categoria = CATEGORIA.id_categoria) WHERE CATEGORIA.nombre = "'+categoryName+'";',
        (err, rows)=>{ 
            if(err){
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
};

module.exports = productoCategoriaModel; 