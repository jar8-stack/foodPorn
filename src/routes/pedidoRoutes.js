const res = require('express/lib/response');
const Pedido = require('../models/pedido')

module.exports = function (app){
    app.get('/Pedido/:idUsuario', (req, res)=>{
        Pedido.getPedidosByUser(req.params.idUsuario, (err, data) =>{
            res.status(200).json(data); 
        });
    });

    app.post('/Pedido', (req, res)=>{
        const pedidoData = {
            id_pedidos: null, 
            cantidad: req.body.cantidad,
            direccion_envio: req.body.direccion_envio,
            fecha_pedido: req.body.fecha_pedido,
            estatus_pedido: req.body.estatus_pedido,
            id_usuario: req.body.id_usuario    
        };
        Pedido.insertPedido(pedidoData, (err, data)=>{
            if(data && data.insertId){
                res.status(200).json({
                  success: true,
                  msg: 'Pedido registrado',
                  data: data
                })
              }else{
                res.status(500).json({
                  success: false,
                  msg: 'Error'
                });
              }
        });
    });


    //Insertar detalles de pedido
    app.post('/Pedido/Detalle', (req, res)=>{
        const detallePedidoData = {
            id_producto: req.body.id_producto, 
            id_pedidos: req.body.id_pedidos,
            precio: req.body.precio,
            cantidad: req.body.cantidad
        };
        Pedido.insertDetallePedido(detallePedidoData, (err, data)=>{
            if(data && data.insertId){
                res.status(200).json({
                  success: true,
                  msg: 'Detalle de pedido registrado',
                  data: data
                })
              }else{
                res.status(500).json({
                  success: false,
                  msg: 'Error'
                });
              }
        });
    });
};