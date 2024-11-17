const express = require('express');
const UsuariosRotas = require('./UsuariosRotas');
const PostsRotas = require('./PostsRouters');

const RotasPrivadas = express.Router();

RotasPrivadas.use((request, response, next) => {
    console.log(request.headers.token); //Aqui eu estou printando o token pegando a request, e vendo o token no header
    
    if(request.headers.token !== 'aabbccddeeff'){ //Se o header da requisição não tiver o mesmo token
        return response.status(403).send("Não autorizado"); //Não autorize o acesso
    }
    
    next();
    
})

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostsRotas);


module.exports = RotasPrivadas;