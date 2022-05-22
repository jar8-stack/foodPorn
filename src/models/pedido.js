const connection= require('../models/connection')

let pedidoModel = {};

// Obtener pedidos por usuario
pedidoModel.getPedidosByUser = (idUsuario, callback) =>{
    if(connection){
        connection.query('SELECT * FROM PEDIDOS WHERE PEDIDOs.id_usuario = '+idUsuario+'; ',
        (err, rows)=>{ 
            if(err){
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
};

//Insertar pedidos
pedidoModel.insertPedido = (pedidoData, callback) =>{
    if(connection){
        connection.query(
            'INSERT INTO PEDIDOS SET ?', pedidoData,
            (err, result) =>{
                if(err){
                    throw err;
                }else{
                    callback(null, {
                        'insertId': result.resultId
                    });
                }
            }
        )
    }
};


// Insertar detalle de pedido
pedidoModel.insertDetallePedido = (detallePedidoData, callback) =>{
    if(connection){
        connection.query(
            'INSERT INTO DETALLE_PEDIDO SET ?', detallePedidoData,
            (err, result) =>{
                if(err){
                    throw err;
                }else{
                    callback(null, {
                        'insertId': result.resultId
                    });
                }
            }
        )
    }
};

module.exports = pedidoModel; 