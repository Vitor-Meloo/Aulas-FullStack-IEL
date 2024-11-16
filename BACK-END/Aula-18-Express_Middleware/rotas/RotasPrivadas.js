const express = require('express');
const UsuariosRotas = require('./UsuariosRotas');
const PostsRotas = require('./PostsRouters');



const RotasPrivadas = express.Router();

RotasPrivadas.use((request, response, next) => {//Com isso sempre que eu tentar acessar as rotas, primeiro ele cai no MiddleWare
    console.log("Middleware");
  
    return response.status(403).send("Não autorizado"); // Aqui eu ja não autorizo a rota que esta tentando ser acessada

    next(); // Aqui eu permitiria a rota de ser acessada
})

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostsRotas);


module.exports = RotasPrivadas;