const produtos = require('./produtos');//Tem que exportar as classes que vão ser usadas
const usuarios = require('./usuarios'); 

const rotas = { //Criando um objeto com outro objeto dentro
    '/produtos':{ // Este objeto criado corresponde a uma das rotas que eu estou usando na main, /produtos
        'GET': produtos.listar(), 
        'POST': produtos.adicionar(),
        'PUT': produtos.editar(0),
        'DELETE': produtos.excluir(0)
        //De acordo com o methodo dentro de /produtos, eu chamo uma função da minha classe produtos
    },
    '/usuarios':{
        'GET': usuarios.listar(), 
        'POST': usuarios.adicionar(),
        'PUT': usuarios.editar(0),
        'DELETE': usuarios.excluir(0)
        //Mesma coisa pra usuarios
    }

};

module.exports = rotas;