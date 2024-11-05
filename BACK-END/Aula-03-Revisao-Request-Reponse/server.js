const { createServer } = require('node:http');

const host = 'localhost';
const port = 3000;//A porta é definida de 3000 pra cima

//O writeHead, é o cabeçalho da resposta, que tem as informações que o navegador consegue definir qual tipo de retorno
const app = createServer( (request, response) => {

    console.log("Cliente solicitou...");//Essa linha é um exemplo de sempre que eu mudo algo no server, ele solicita

    response.writeHead(200, {'Content-type':'text/plain'});//Pode responder com diversos tipos de dados, JSON, pdf, app
    return response.end("Olá nodeJS");
});

app.listen(port, host, () => {
    console.log(`Servidor do NodeJS executando http://${host}:${port}`);
})

