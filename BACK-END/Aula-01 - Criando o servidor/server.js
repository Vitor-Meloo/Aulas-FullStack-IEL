//É preciso importar algumas configurações para criar o server

const { createServer, request } = require('node:http'); 
/*Aqui temos o modulo node:http, que tem varias funções pra criação de servers, aqui vamos pegar apenas
a createserver, e request, assim o objeto "require(node:http)" que tem toda a gama de funções é desestruturado
e apenas pegamos oque precisamos dele*/

const host = '127.0.0.1'; //Posso setar diretamente o host e porta em variáveis
const port = 3000;

const server = createServer((request, response) => { 
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('Hello World, Aula de Backend');
});
/*Aqui oque ocorre é que temos a função createServer que cria o servidor http e dentro dela temos a função
(request, response) como callback sendo assim, sempre que a função mãe for chamada, a que está dentro vai rodar, 
e nesse caso, trazendo uma response do tipo de conteudo (text/html) e codigo 200 indicando requisiçao bem sucedida,
e outra response.end escrevendo o texto designado*/

server.listen(port, host, () => { 
    console.log(`Servidor executando http://${host}:${port}`)
});
/*Aqui temos o server.listen que faz com que o server que eu criei fique escutando as requisições na porta e host
que eu indico, logo após isso, crio uma função callback, que assim que o servidor escutar qualquer coisa, ela sera
executada, e irá fazer um console.log indicando a mensagem, ali ainda usei o ${} para indexar direto a port e host*/