const res = require('express/lib/response');
const Usuario = require('../models/usuario')

module.exports = function (app){
    app.get('/Usuario', (req, res)=>{
        Usuario.getUsuarios((err, data) =>{
            res.status(200).json(data); 
        });
    });

  app.get('/Usuario/:email', (req, res)=>{
      Usuario.getUsuariosLogin(req.params.email, (err, data) =>{
          res.status(200).json(data); 
      });
  });

    app.post('/Usuario', (req, res)=>{
        const usuarioData = {
            id_usuario: null, 
            email: req.body.email,
            password: req.body.password,
            telefono: req.body.telefono,
            imagen_perfil: req.body.imagen_perfil,
            primer_nombre: req.body.primer_nombre,
            apellido_paterno: req.body.apellido_paterno,
            apellido_materno: req.body.apellido_materno,
            direccion: req.body.direccion,
            codigo_postal: req.body.codigo_postal,
        };
        Usuario.insertUsuario(usuarioData, (err, data)=>{
            if(data && data.insertId){
                res.status(200).json({
                  success: true,
                  msg: 'Usuario registrado',
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
}