const express = require('express');
const jwt = require('jsonwebtoken'); // Chamando a lib do JWT
const AuthController = require('../controllers/AuthController');


const RotasPublicas = express.Router();

RotasPublicas.post('/login', (request, response) => {
    const body = request.body;
    const auth = new AuthController();
    const dados = auth.login(body.login, body.senha);
    if (dados) {
        const token = jwt.sign(dados, 'qwe123rty456uio789')
        return response.json({
            token: token
        })
    }

    return response.json({
        message: "Login ou senha incorreto"
    })


})


module.exports = RotasPublicas;