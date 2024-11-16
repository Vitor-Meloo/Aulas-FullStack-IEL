const PostModel = require('../models/PostModel');


class PostsController {  
   
    listar(request, response) {
        const dados = PostModel.listar(); 
        return response.json(dados);
    }

    consultarPorId(request, response) {
        const id = request.params.id;//pegando os parametros do id, e passando pra função
        const dados = PostModel.consultarPorId(id);   
        return response.json(dados)
    }

    criar(request, response) {
        const body = request.body;
        PostModel.criar(body); 
        return response.status(201).json({
            message: "Usuario cadastrado com sucesso"
        })
    }

    atualizar(request, response) {
        const id = request.params.id;
        const body = request.body; // também recebe o body que serão os dados que vem do front end para alterar
        PostModel.atualizar(id, body);
        return response.json({
            message: "Usuario atualizado com sucesso"
        })
    }

    deletar(request, response){
        const id = request.params.id;

        PostModel.deletar(id);

        return response.status(200).json({
            message: "Usuário deletado com sucesso"
        })
    }

}

module.exports = PostsController;