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

class Gerente extends Pessoa { 
    constructor(nome, cpf, data_nascimento) {
       super(nome, cpf, data_nascimento);
    }
}

const pessoa = new Pessoa ('João', '43345565676', '2000-01-09');//Eu preciso instanciar minha classe quando ela não é estática
const gerente = new Gerente('Vitor', '23341167587', '2000-01-09');

console.log(pessoa.nome);//E assim eu consigo chamar um atributo/metodo dessa classe
pessoa.autenticacao();
console.log(Pessoa.nome);//Aqui vai dar undefined, pois eu não consigo chamar diretamente da classe sem instanciar

//RESOLVENDO O PROBLEMA DA INSTANCIA USANDO CLASSES STATICAS

console.log("--------------- USANDO CLASSES STATICAS --------------------------------");

class Carro{
    //Não é obrigado a criar o atributo modelo aqui antes da construtor
    constructor(modelo){
        this.modelo = modelo
    }

    static acelerar(){//Usando o static pra não precisar instanciar a classe usando o new Carro()
        console.log("Acelerando...");
    }

    static frear(){
        console.log("Freando...");
    }

    static ligarseta(direcao){
        console.log("Ligando seta para " + direcao);
    }
}

const carro = new Carro("Chevrolet");
console.log(carro.modelo);//Aqui eu precisei instanciar pois o construtor não está estatico

//Mas nas outras funções estaticas agora podemos passar os metodos diretamente sem instanciar a classe antes
Carro.acelerar();
Carro.frear();
Carro.ligarseta("Direita");
Carro.ligarseta("Esquerda");

//Então basicamente quando eu quiser usar atributos/metodos de uma classe chamando diretamente Classe.atributo/metodo eu preciso usar static
//e assim não preciso instanciar a classe antes como foi mostrado com const carro = new Carro()

