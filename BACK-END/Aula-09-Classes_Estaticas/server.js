const { createServer } = require('node:http');
const listarProdutos = require('./routes/produtos')
const host = 'localhost';
const port = 3000;


const app = createServer( (request, response) => {

    const { url, method } = request; 

    console.log("URL - ", url);
    console.log("Método/Verbo - ", method);

    if (url === '/') {
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Página inicial");  
    }

    if (url === '/produtos') { 

        const dados = listarProdutos();

        response.writeHead(200, {'Content-type':'application/JSON'});
        return response.end(JSON.stringify(dados));
    }

    if (url === '/produtos/adicionar') {

        dados.push({
            nome: 'Monitor 34p',
            valor: 3330.00
        });

        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Produto adicionado com sucesso!");
    }

    if (url === '/produtos/remover') { 
        produtos.pop();

        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Produto removido com sucesso!");
    }

    response.writeHead(404, {'Content-type':'text/plain'});
    return response.end("Pagina não encontrada! :( ");
});

app.listen(port, host, () => {
    console.log(`Servidor do NodeJS executando http://${host}:${port}`);
})

