const { createServer } = require('node:http');

const host = 'localhost';
const port = 3000;

const app = createServer( (request, response) => {

    const { url, method } = request; //Aqui eu faço igual a const { createServer } ali de cima, eu só oque quero de request

    /*é a mesma coisa de eu escrever isso aqui:
    const url = request.url
    const method = request.method*/

    console.log("URL - ", url);//No console ele vai mostrar a URL 
    console.log("Método/Verbo - ", method);//No console vai mostrar o método usado

    if (url === '/') { //Com isso eu consigo jogar a resposta padrão dentro de um IF 
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Página inicial");  
    }

    if (url === '/produtos') { //E ainda colocar uma rota resposta diferente com outra rota
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Listagem de produtos");  
    }

   
    response.writeHead(404, {'Content-type':'text/plain'});//Aqui não precisa de IF, pois serve quando nenhuma rota é encontrada
    return response.end("Pagina nao encontrada :/");  
    

});

app.listen(port, host, () => {
    console.log(`Servidor do NodeJS executando http://${host}:${port}`);
})

/*IMPORTANTE: a URL sempre tem uma / no final mesmo que não apareça, se eu colocar por exemplo
/produtos mesmo que não tenha a rota, vai aparecer no meu console oque foi pedido, com isso
eu consigo fazer rotas no codigo de acordo com o que foi requisitado pelo cliente*/

