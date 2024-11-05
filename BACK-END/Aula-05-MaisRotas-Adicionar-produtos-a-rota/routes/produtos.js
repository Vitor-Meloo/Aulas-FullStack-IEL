function listarProdutos(){
    
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

function addProdutos(){


}

function editarProdutos(){

    
}

function excluirProdutos(){

    
}

module.exports = listarProdutos; //SEMPRE preciso exportar a função para que seja usada na outra pagina