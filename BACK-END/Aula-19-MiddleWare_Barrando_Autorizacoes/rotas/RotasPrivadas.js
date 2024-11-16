const express = require('express');
const UsuariosRotas = require('./UsuariosRotas');
const PostsRotas = require('./PostsRouters');



const RotasPrivadas = express.Router();

RotasPrivadas.use((request, response, next) => {//Com isso sempre que eu tentar acessar as rotas, primeiro ele cai no MiddleWare
    console.log(request.headers.token);//Assim que a comunicação é feita, o console irá exibir o token que eu criei no insomnia nos headers
    
    if(request.headers.token === 'a1b2c3d4e5f6g7h8'){ // Se a request tiver no seu header o mesmo token que eu defini
        next();//Permita o acesso 
    } else{
        return response.status(403).send("Não autorizado"); // Aqui eu ja não autorizo a rota que esta tentando ser acessada
    }
  
})

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostsRotas);


module.exports = RotasPrivadas;