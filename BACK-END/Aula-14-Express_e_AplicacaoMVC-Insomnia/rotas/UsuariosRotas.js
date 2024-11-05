const express = require('express');
const UsuariosController = require('../controllers/UsuariosController');
const UsuariosRotas = express.Router();//Chamando a função do Express que trabalha com rotas


const usuariosControler = new UsuariosController();//Instanciei a classe que tem os metodos que eu preciso nessa variavel

//CRUD
//E aqui de forma mais simples, passei o metodo, a url, e dentro da constante eu chamo os metodos da classe UsuariosController
//Por sua vez a classe UsuariosController recebe as funções da classe UsuarioModel, e assim uma chama a outra em cascata
UsuariosRotas.get('/users', usuariosControler.listar);
UsuariosRotas.post('/users', usuariosControler.criar);
UsuariosRotas.put('/users', usuariosControler.atualizar);
UsuariosRotas.delete('/users', usuariosControler.deletar);

module.exports = UsuariosRotas;
