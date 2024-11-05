const { createServer } = require('node:http');
const Produtos = require('./routes/produtos');  //Importando a classe Produtos com as funções que eu preciso
const rotas = require('./routes/router'); //Importando o arquivo router que acabei de fazer em uma constante

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

    
    //A partir daqui, é melhor ler o arquivo router.js primeiro pra entender melhor

    //Oque ocorre é que a partir daqui, dados automaticamente pega a URL do servidor, e ja usa rotas pra ver qual url é
    //e diretamente se for /produtos, ve qual o metodo, e também buscar em routes, assim chamando a função correspondente
    //rotas[url][method] acessa justamente o arquivo routes, e verifica os objetos dele, é a mesma coisa de usar router['produtos]['GET']

    if(!rotas[url] || !rotas[url][method]){//Se não existe uma rota com url ou metodos
         response.writeHead(404, {'Content-type':'text/plain'});
        return response.end("Pagina não encontrada! :( ");//Mostre pagina não encontrada
    }

    //Se existir passa direto pelo primeiro if e vem pra ca
    const dados = rotas[url][method]; //Dados está recebendo rotas, que recebe os metodos do arquivo router, que dentro dele trás a rota e o metodo nos objetos
    response.writeHead(200, {'Content-type':'application/JSON'});
    return response.end(JSON.stringify(dados));  

    //Com isso eu não preciso mais fazer nada disso aqui, e simplesmente simplifico o código todo
    /*if (url === '/produtos' && method === 'GET') { //Aqui eu começo a afunilar minhas requisições, agora padronizando até o métodos requisitado 
        rotas[produtos][method];
        const dados = Produtos.listar();
        response.writeHead(200, {'Content-type':'application/JSON'});
        return response.end(JSON.stringify(dados));
    }

    if (url === '/produtos' && method === 'POST') { //Como eu só tenho um rota produtos com POST, não preciso usar produtos/adicionar
        Produtos.adicionar(4, 'Monitor', 5485.55);
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Produto adicionado com sucesso!");
    }

    if (url === '/produtos' && method === 'PUT') { //Aqui tammbém não preciso mais de produtos/editar
        Produtos.editar();
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Produto adicionado com sucesso!");
    }

    if (url === '/produtos' && method === 'DELETE') { //E nem aqui de produtos/remover
        Produtos.excluir(1)
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Produto removido com sucesso!");
    }*/

});

app.listen(port, host, () => {
    console.log(`Servidor do NodeJS executando http://${host}:${port}`);
})

