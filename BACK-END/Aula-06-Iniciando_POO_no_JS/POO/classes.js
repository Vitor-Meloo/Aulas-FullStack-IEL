//CLASSES

//Classes servem como um molde pré programado para atributos de objetos que eu vou precisar escrever N vezes seguidas

class Pessoa {//Classes sempre começam com letra maiuscula no JS
    //Atributos da classe
    nome = '';
    cpf = '';
    idade = '';

    constructor (nome, cpf, idade){
        this.nome = nome; //O this nome indica que o nome é a propria variel desta classe,  o outro é referente ao parametro do construtor
        this.cpf = cpf;
        this.idade = idade;
    }

    //EVENTOS DA CLASSE
    correr(){//NO JS não é preciso descrever FUNCTION CORRER() em classes, apenas o correr() ja basta
        console.log(`O ${this.nome} está correndo...`); 
    }

    dormir(){
        console.log("Dormindo....zzzzzzz");
    }
}

const pessoa1 = {//Em vez de fazer assim e escrever um monte...
    nome: "Vitão",
    cpf: "1251",
    idade: '1',
    correr: () => {},
    dormir: () => {},
}

//...Eu faço assim gastando menos tempo
const pessoaClasse = new Pessoa("Jose", "23345576587", 12);//Facilmente eu preencho os atributos da clase
const pessoaClasse2 = new Pessoa("Maria", "12334567587", 15);
const pessoaClasse3 = new Pessoa("Paulo", "23254567687", 42);



console.log(pessoa1);
//Aqui vou printar só os objetos de classe com suas respectivas informações
console.log(pessoaClasse);
console.log(pessoaClasse2);
console.log(pessoaClasse3);

//A aqui vou usar as funções puxando o atributo nome de cada objeto de classe
pessoaClasse.correr()
pessoaClasse2.correr()
pessoaClasse3.correr()

//Eu ainda consigo modificar o dado de uma classe caso precise
pessoaClasse.nome = 'Jubiscleiton'
console.log("José foi mudado para " + pessoaClasse.nome);
