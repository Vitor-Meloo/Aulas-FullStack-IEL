const express = require('express');
const UsuariosController = require('../controllers/UsuariosController');
const UsuariosRotas = express.Router();

const usuariosControler = new UsuariosController();

UsuariosRotas.get('/users', usuariosControler.listar);
//Aqui vou passar lá em controllers, pedindo pra requeste me trazer os parametros do id
UsuariosRotas.get('/users/:id', usuariosControler.consultarPorId);//Dupliquei e vou usar a função consultar só que por :id, assim eu passo o parametro /id na url  
UsuariosRotas.post('/users', usuariosControler.criar);
UsuariosRotas.put('/users/:id', usuariosControler.atualizar);
UsuariosRotas.delete('/users/:id', usuariosControler.deletar);

module.exports = UsuariosRotas;
