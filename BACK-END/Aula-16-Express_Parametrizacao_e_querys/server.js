const express = require('express')
const UsuariosRotas = require('./rotas/UsuariosRotas');

const host = "localhost";
const port = 3000;

const app = express(); 
app.use(express.json())

app.get('/', (request, response) => {
    return response.send("Olá eu sou o servidor Node + Express")
})

app.use(UsuariosRotas);

app.post('/teste/:codigo', (request, response) => {//A url tem o parametro codigo, assim é obrigatorio ter um codigo pra funcionar

    //Query
    const query = request.query;//Já existe o objeto query nas funções do express, eu apenas coloco ele em uma const
    let dados = "Query " + query.nome + "-" + query.sobrenome; //E como todo objeto, eu posso passar o parametro apos o ponto

    //Parametros da URL
    const params = request.params;//aqui eu trago os parametros do objeto request, assim como fiz com a query acima
    dados = dados + "<br > Params: " + params.codigo //a const dados vai receber ela mesma + o parametro codigo da URL

    //Body - PS: o Body vem direto do corpo do texto, assim aqui deveria ser usado um post ou Put nesta rota, para testes poderá ser mudada aqui e no Insomnia

    const body = request.body; //Mesma coisa aqui, requisitando tudo oque tiver no body
    dados = dados + "<br > Body: " + JSON.stringify(body); //O body precisa ser convertido pra texto, pois é um objeto
    return response.send(dados);

///La na URL, ficaria ?nome=Vitor&sobrenome=Melo, assim a query puxa o nome e sobrenome da URL, e imprime na tela
});



app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}`);
})