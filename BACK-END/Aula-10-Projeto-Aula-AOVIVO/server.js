//const { createServer } = require('node:http')
//Criando sem o Express
/*const app = createServer((request, response) => {

    if(request.method === 'GET' && request.url === '/'){
        response.writeHead(200, {'Content-Type': 'text/plain'})
        return response.end("Pagina Inicial"); 
    }

    if(request.method === 'GET' && request.url === '/posts'){
        response.writeHead(200, {'Content-Type': 'text/html'})
        return response.end("<h1>Posts<h1>"); 
    }

    response.writeHead(404, {'Content-Type': 'text/plain'})
    return response.end("Pagina nao encontrada");
})*/
const express = require('express')
const cors = require('cors')
const host = 'localhost';
const port = 3000;

//Criando com o Express
const app = express()
app.use(express.json())
app.use(cors())
app.get('/', (request, response) => {
    return response.send("Hello Express")
})

const listaUsuarios = [
    {
        id: 1,
        nome: 'João',
        email: 'joao@exemplo.com'
    }
];

app.get('/users', (request, response) => {//Com essa rota eu consulto a lista
    return response.json(listaUsuarios)
})

app.post('/users', (request, response) => {//E com essa eu gravo
    const dados = request.body;
    listaUsuarios.push(dados)
    return response.json({
        message: 'Usuario criado com sucesso'
    })
})

app.put('/users/:id', (request, response) => {//Com essa eu edito

    const id = request.params.id;
    const dados = request.body;
    const index = listaUsuarios.findIndex(user => user.id == id);
    listaUsuarios[index] = dados;

    return response.json({
        message: 'Usuario atualizado com sucesso'
    })
})

app.delete('/users/:id', (request, response) => {//Com essa eu deleto
    
    const id = request.params.id;
    const index = listaUsuarios.findIndex(user => user.id == id);
    listaUsuarios.splice(index, 1);

    return response.json({
        message: 'Usuario deletado com sucesso'
    })
})


app.listen(port,host, () => {
    console.log('Servidor executando na http://localhost:3000')
});

