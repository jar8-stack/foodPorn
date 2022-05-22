const res = require('express/lib/response');
const Categoria = require('../models/categoria')

module.exports = function (app){
    app.get('/Categoria', (req, res)=>{
        Categoria.getCategory((err, data) =>{
            res.status(200).json(data); 
        });
    });
}