const { createServer } = require('node:http');
const listarProdutos = require('./routes/produtos')//Importando a função, igualmente como se fosse uma lib
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

        const dados = listarProdutos();//Essa constante trás a lista de produtos da outra pagina

        response.writeHead(200, {'Content-type':'application/JSON'});//Preciso converter pro tipo certo
        return response.end(JSON.stringify(dados));//SEMPRE preciso converter arrays para strings
    }

    if (url === '/produtos/adicionar') {//Essa rota vai adicionar um produto no array lá de cima, dos produtos

        dados.push({//Aqui com o push, ele vai adicionar diretamente naquele array
            id:3,
            nome: 'Monitor 34p',
            valor: 3330.00
        });

        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Produto adicionado com sucesso!");//Mas quando eu acessar a pagina, só vou ver esse texto
        //A partir do momento que eu acesso essa rota, o array produtos será modificado, e quando eu voltar pra rota
        //produtos, vai estar adicionado este item daqui, tecnicamente eu mudei os itens da primeira rota por aqui
    }

    if (url === '/produtos/remover') { //Mesmo esquema da outra, só que removendo

        produtos.pop();//Irá remover o ultimo item da lista
        
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Produto removido com sucesso!");
    }

    response.writeHead(404, {'Content-type':'text/plain'});
    return response.end("Pagina não encontrada! :( ");
});

app.listen(port, host, () => {
    console.log(`Servidor do NodeJS executando http://${host}:${port}`);
})

