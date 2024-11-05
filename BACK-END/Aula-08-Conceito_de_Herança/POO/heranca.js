class Pessoa {//Criando uma classe básica
    nome;
    cpf;
    data_nascimento;

    constructor (nome, cpf, data_nascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }

    autenticacao(){
        console.log(`${this.nome} - Autenticando...`);
    }
}

class Gerente_Sem_Heranca {//Percebe-se que aqui eu estou reescrevendo os atributos da classe pessoa, e isso é muito custoso
    nome;
    cpf;
    data_nascimento;

    constructor(nome, cpf, data_nascimento) {
        this.nome = nome
        this.cpf = cpf
        this.data_nascimento = data_nascimento
    }
}

class Gerente extends Pessoa { //Com a herança da classe pessoa eu aproveito os atributos pra esta classe
    constructor(nome, cpf, data_nascimento) {//Esse construtor é da classe gerente, e indica os atributos dele
       super(nome, cpf, data_nascimento);//Super significa a classe mãe, e está passando os dados do construtor dela
       //Assim ao chamar o construtor da classe mãe, e passando os parametros da classe filha, ele vai preencher 
       //os dados diretamente usando o construtor da classe mãe para a classe filha
    }

}

const pessoa = new Pessoa ('João', '43345565676', '2000-01-09');
const gerente = new Gerente('Vitor', '23341167587', '2000-01-09');

console.log(pessoa);
pessoa.autenticacao();

console.log(gerente);
gerente.autenticacao();

