const { createServer } = require('node:http');
const Produtos = require('./routes/produtos')  //Importando a classe Produtos com as funções que eu preciso
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

        const dados = Produtos.listar();

        response.writeHead(200, {'Content-type':'application/JSON'});
        return response.end(JSON.stringify(dados));
    }

    if (url === '/produtos/adicionar') {
        Produtos.adicionar(4, 'Monitor', 5485.55);//Aqui o exemplo da passagem de parametro na função adicionar, aqui vai virar o id, nome, e valor lá na função 
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Produto adicionado com sucesso!");
    }

    if (url === '/produtos/remover') { 
        Produtos.excluir(1) // Aqui o exemplo da variavel "indice" que usei, o numero 1 passado aqui irá ser aplicado a variavel indice e com isso passo ele na função 
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Produto removido com sucesso!");
    }

    response.writeHead(404, {'Content-type':'text/plain'});
    return response.end("Pagina não encontrada! :( ");
});

app.listen(port, host, () => {
    console.log(`Servidor do NodeJS executando http://${host}:${port}`);
})

