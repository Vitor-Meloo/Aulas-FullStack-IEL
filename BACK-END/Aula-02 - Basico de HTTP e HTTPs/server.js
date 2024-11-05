
const { createServer, request } = require('node:http'); 

const host = '127.0.0.1'; 
const port = 3000;

const server = createServer((request, response) => { 

    console.log(response); //Aqui eu mostro oque tem na variavel response, ao subir o servidor, vai aparecer as infos no console
    
    console.log(request);//Da mesma forma consigo ver oque tem na request quando subir o server
    
    console.log("Método usado:" + request.method);//Aqui eu vejo qual metodo está sendo solicitado na request

    console.log("URL: " + request.url);//Aqui eu vejo a URL do servidor


    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('Hello World, Aula de Backend');
});

server.listen(port, host, () => { 
    console.log(`Servidor executando http://${host}:${port}`)
});

/*Dentro do HTTP, temos os metodos/verbos que são:
GET - Solicitação de dados
POST - Gravar Dados
PUT/Patch - Editar dados
DELETE - Deletar dados*/
