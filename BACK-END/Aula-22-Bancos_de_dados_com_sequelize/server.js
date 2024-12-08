const express = require('express')
const RotasPrivadas = require('./rotas/RotasPrivadas');
const RotasPublicas = require('./rotas/RotasPublicas');

const host = "localhost";
const port = 3000;

const app = express(); 
app.use(express.json())

app.get('/', (request, response) => {
    return response.send("Olá eu sou o servidor Node + Express")
})

app.use(RotasPublicas);

app.use(RotasPrivadas);

app.put('/teste/:codigo', (request, response) => {

   
    const query = request.query;
    let dados = "Query " + query.nome + "-" + query.sobrenome; 


    const params = request.params;
    dados = dados + "<br > Params: " + params.codigo 

    const body = request.body; 
    dados = dados + "<br > Body: " + JSON.stringify(body); 
    return response.send(dados);

});

app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}`);
})