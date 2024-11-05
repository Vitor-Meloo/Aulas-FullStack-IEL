cep.onkeyup = () => {
    if(cep.value.length == 8){
        console.log("Digitou o CEP")
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`) //Com isso irá fazer a requisição ao site VIACEP
        .then(resposta => resposta.json())
        .then(resposta2 => {
            rua.value = resposta2.logradouro;
            bairro.value = resposta2.bairro;
            cidade.value = resposta2.localidade;
            estado.value = resposta2.uf;
            //A resposta2 é o arquivo fornecido pelo site, nele temos os dados separados, assim basta 
            //pegar cada valor da resposta2 correpo
        })
        .finally(() => {//Geralmente usado quando se quer fazer algo no final de todas as ações
            alert("Procedimento Concluido!")
        })
    }
}

//O FETCH retorna uma promessa, ele irá buscar no link fornecido as informações necessárias
//O primeiro THEN é responsável por pegar a resposta vinda do FETCH e traduzi-la em JSON, virando um objeto
//O segundo THEN irá pegar o objeto JSON e trazer ele para poder manipular ele no código