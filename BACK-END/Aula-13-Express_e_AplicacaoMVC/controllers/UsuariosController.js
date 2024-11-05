const UsuarioModel = require('../models/UsuariosModel');//Vou chamar os usuarios model pra cá

//O controller vai receber as solicitações, e o model vai persistir os dados

class UsuariosController { //Aqui teremos os metodos usados 

    listar() {
        const usuarioModel = new UsuarioModel(); //Dentro da função em controller eu chamo o proprio metodo da classe model
        return usuarioModel.listar();
    }

    constultarPorId() {
        const usuarioModel = new UsuarioModel(); //Dentro da função em controller eu chamo o proprio metodo da classe model
        return usuarioModel.constultarPorId();
    }

    criar() {
        const usuarioModel = new UsuarioModel(); 
        return usuarioModel.criar(); 
    }

    atualizar() {
        const usuarioModel = new UsuarioModel(); 
        return usuarioModel.atualizar();
    }

    deletar(){
        const usuarioModel = new UsuarioModel();
        return usuarioModel.deletar();
    }





}


module.exports = UsuariosController;