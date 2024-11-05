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

const pessoaClasse = new Pessoa("Jose", "23345576587", 12);//Quando eu crio a const, é criado em um endereço da memoria, que é atribuido a const
const pessoaClasse2 = new Pessoa("Maria", "12334567587", 15);//O endereço de memoria é algo como "xhj014567"
const pessoaClasse3 = new Pessoa("Paulo", "23254567687", 42);//Então na verdade a const pessoaClasse na verdade guarda apenas o endereço de memoria que os dados estão 

pessoaClasse.nome = 'Marcos' //Aqui vou modificar normalmente 


const pessoa_aux = pessoaClasse; //Já que pessoaClasse guarda um endereço de memoria "xhj014567", quem receber ela vai apontar pro mesmo endereço, isso é um ponteiro
pessoa_aux.nome = "Alice"//Com isso, se eu modifico algo no ponteiro, ele vai modificar os dados do endereço "xhj014567" que é a mesma coisa da variavel pessoaClasse
