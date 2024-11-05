//OBJETOS
const pessoa = {//Criando um objeto
    nome: 'Vitor',
    idade: 23, 
    cpf: '61112297375'
}

console.log(pessoa.nome);//Acessando os dados 
console.log(pessoa.idade);
console.log(pessoa.cpf);
//O problema aqui é ter que ficar digitando toda vez essa repetição , imagine 50 pessoas pra cadastrar

const pessoas = [
    pessoa,
    { //Também da pra criar um array de objetos e ainda criar um novo aqui dentro direto
        nome: "Bruna",
        idade: 30, 
        cpf: "12345678900"
    }
]

//Para resolver este problema de digitar muitas vezes um mesmo objeto e seus atributos
//Vamos criar outra pasta, agora com classes em vez de objetos
