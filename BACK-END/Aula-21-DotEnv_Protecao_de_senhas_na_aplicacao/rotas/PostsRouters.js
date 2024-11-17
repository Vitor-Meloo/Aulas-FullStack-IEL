const express = require('express');
const PostsController = require('../controllers/PostsController');
const PostsRotas = express.Router();

const postsControler = new PostsController();

PostsRotas.get('/posts', postsControler.listar);
PostsRotas.get('/posts/:id', postsControler.consultarPorId);
PostsRotas.post('/posts', postsControler.criar);
PostsRotas.put('/posts/:id', postsControler.atualizar);
PostsRotas.delete('/posts/:id', postsControler.deletar);

module.exports = PostsRotas;
