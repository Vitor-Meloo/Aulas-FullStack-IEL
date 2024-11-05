const express = require('express')
const UsuariosRotas = require('./rotas/UsuariosRotas');//aqui começa a chamada da cascata de requisições
//No server eu chamo rotas, em rotas eu chamo o controller, e dentro do controller foi chamado os models

const host = "localhost";
const port = 3000;

const app = express(); //Criando o servidor com express de forma simples
app.use(express.json())//Aqui estou liberando pro express que possa usar JSON

app.get('/', (request, response) => {//Essa é a primeira rota que acessa quando inicia o servidor
    return response.send("Olá eu sou o servidor Node + Express")//Assim que acessar ela, a função filha a executda passando a resposta
})

app.use(UsuariosRotas); //Ele vai usar a constante UsuariosRotas que contem nela todas as funções de cada rota chamada


app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}`);
})