class Pessoa {

    nome = '';
    cpf = '';
    idade = '';

    constructor (nome, cpf, idade){
        this.nome = nome; 
        this.cpf = cpf;
        this.idade = idade;
    }

    
    correr(){
        console.log(`O ${this.nome} está correndo...`); 
    }

    dormir(){
        console.log("Dormindo....zzzzzzz");
    }
}

const pessoa1 = {
    nome: "Vitão",
    cpf: "1251",
    idade: '1',
    correr: () => {},
    dormir: () => {},
}
//Conceito de Ponteiros

const pessoaClasse = new Pessoa("Jose", "23345576587", 12);
const pessoaClasse2 = new Pessoa("Maria", "12334567587", 15);
const pessoaClasse3 = new Pessoa("Paulo", "23254567687", 42);

pessoaClasse.nome = 'Marcos' 


const pessoa_aux = pessoaClasse; 
pessoa_aux.nome = "Alice"
