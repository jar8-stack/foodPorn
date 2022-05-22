const res = require('express/lib/response');
const Producto = require('../models/producto')

module.exports = function (app){
    app.get('/Producto', (req, res)=>{
        Producto.getProductos((err, data) =>{
            res.status(200).json(data); 
        });
    });

    app.get('/Producto/:idProducto', (req, res)=>{
        Producto.getEspecificProduct(req.params.idProducto, (err, data) =>{
            res.status(200).json(data); 
        });
    });
}