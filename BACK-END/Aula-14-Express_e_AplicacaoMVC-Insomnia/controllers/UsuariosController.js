const UsuarioModel = require('../models/UsuariosModel');//Vou chamar os usuarios model pra cá

//O controller vai receber as solicitações, e o model vai persistir os dados

class UsuariosController {  
    //Agora chamo tudo direto da classe sem precisar instanciar
    listar(request, response) {
        const dados = UsuarioModel.listar(); //Jogando a listagem pra dentro de uma variavel
        return response.json(dados);//Vou mandar uma resposta pro servidor, em JSON passando os dados da listagem
    }

    constultarPorId(request, response) {
        return UsuarioModel.constultarPorId();   
    }

    criar(request, response) {
        const body = request.body;//Em vez de criar usuarios direto aqui, eu pego oque é criado no body, ou seja no front, e trago pra cá
        UsuarioModel.criar(body); 
        return response.status(200).json({
            message: "Usuario cadastrado com sucesso"
        })
    }

    atualizar(request, response) {
        return UsuarioModel.atualizar();
    }

    deletar(request, response){
        return UsuarioModel.deletar();
    }

}


module.exports = UsuariosController;