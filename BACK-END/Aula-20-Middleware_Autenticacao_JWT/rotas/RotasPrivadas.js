const express = require('express');
const jwt = require('jsonwebtoken');
const UsuariosRotas = require('./UsuariosRotas');
const PostsRotas = require('./PostsRouters');
const e = require('express');

const RotasPrivadas = express.Router();

RotasPrivadas.use((request, response, next) => {

    let auth = false

    if(request.headers.token){

        const { token } = request.headers;

        try {
            jwt.verify(token, 'qwe123rty456uio789');
            auth = true; 
        } catch (error) {
            return response.status(403).send(error)
        } 
    }

    if (auth === false) {
        return response.status(403).send("Não Autorizado")
    }
    
    next();
    
})

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostsRotas);


module.exports = RotasPrivadas;