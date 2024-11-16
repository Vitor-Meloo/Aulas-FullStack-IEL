class PostModel {
    static lista = [ 
        {
            id: 1,
            titulo: "HTML e CSS",
            conteudo: "conteudo do post"
        },
        {
            id: 2,
            titulo: "Curso de JS",
            conteudo: "Conteudo JS"
        }

    ];


    static listar() {
        return PostModel.lista; 
    }

    static consultarPorId(id) {
        const dados = PostModel.lista.find(item => item.id == id);//filtrando o item
        return dados;
    }

    static criar(data) {
        PostModel.lista.push(data)
    }

    static atualizar(id, data) {
        const indice = PostModel.lista.findIndex(item => item.id == id);
        PostModel.lista[indice] = data;
    }

    static deletar(id){
        const dados = PostModel.lista.filter(item => item.id != id);
        PostModel.lista = dados;
    }
}

module.exports = PostModel;