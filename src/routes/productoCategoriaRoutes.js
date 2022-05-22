const res = require('express/lib/response');
const productoCategoria = require('../models/productoCategoria')

module.exports = function (app){
    app.get('/ProductoCategoria', (req, res)=>{
        productoCategoria.getCategory((err, data) =>{
            res.status(200).json(data); 
        });
    });

    //ruta de obtención de productos por categoria
    app.get('/ProductoCategoria/:categoria', (req, res)=>{
        productoCategoria.getProductoCategoriaSpecific(req.params.categoria, (err, data) =>{
            res.status(200).json(data); 
        });
    });
}