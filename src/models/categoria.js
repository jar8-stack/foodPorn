const connection= require('../models/connection')

let categoriaModel = {}; 

// Obtener las categorias
categoriaModel.getCategory = (callback) =>{
    if(connection){        
        connection.query('SELECT * FROM CATEGORIA',
        (err, rows)=>{ 
            if(err){
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
};

module.exports = categoriaModel; 