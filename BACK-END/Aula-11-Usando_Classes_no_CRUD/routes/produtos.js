/*
function listarProdutos(){//Eu teria que importar tudo isso 
    
    const produtos = [//Lista de produtos que vão aparecer na rota /produtos
        {
            id: 1,
            nome: "Mouse USB",
            valor: 39.99
        },
        {
            id: 2,
            nome: "Teclado USB",
            valor: 29.99
        }
    ];

    return produtos;
}

function addProdutos(){//de uma por uma

}

function editarProdutos(){//Oque aumentaria o trabalho
  
}

function excluirProdutos(){//Assim é melhor eu criar uma classe e jogar eles dentro
  
}*/

class Produtos {

    static produtos = [
        {
            id: 1,
            nome: "Mouse USB",
            valor: 39.99
        },
        {
            id: 2,
            nome: "Teclado USB",
            valor: 29.99
        }
    ];

    static listar(){ //Não precisa colocar como function, e static pra não precisar instanciar a classe
        return Produtos.produtos;
    }
    
    static adicionar(id, nome, valor){ // A passagem de parametro com id,nome,valor, pega direto oque eu passar e joga aqui
        Produtos.produtos.push({//Quando chamada, a função manda direto pro array produtos da classe produtos, por isso Produtos.produtos
            id: id,
            nome: nome,
            valor: valor
        });
    }

    static editar(indice){
        
    }

    static excluir(indice){ //Esse indice é apenas o nome da variavel que eu uso pra receber o valor que eu passo no codigo
        Produtos.produtos.splice(indice, 1) //o indice (1) que passei no codigo, veio pra indice, então aqui é entendido como splice(1, 1)
        console.log(Produtos.produtos);//O splice me diz pra dixer onde eu começo (indice = 1) e depois da virgula quantos eu removo a partir do indice
        //aqui começa no indice 1, e vai tirar só um, ou seja só ele mesmo e por ai vai.
        
    }
}


//module.exports = listarProdutos; //SEMPRE preciso exportar a função para que seja usada na outra pagina, mas pode ser custoso se tiverem muitas
module.exports = Produtos; // Assim fica mais facil de importar todos os metodos de uma vez