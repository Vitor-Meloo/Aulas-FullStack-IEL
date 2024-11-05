class UsuarioModel {

    //Vou deixar todas static para não precisar ficar instanciando la em UsuariosController


    static lista = [ //Criando uma lista para simular uma base de dados
        {
            nome: "admin",
            login: "ADM"
        }




    ];



    static listar() {
        return UsuarioModel.lista //Jogando a lista aqui pra dentro da função listar
    }

    static constultarPorId() {
        
    }

    static criar(data) {
        UsuarioModel.lista.push(data)//Oque for recebido do body, era passar aqui, e ser adicionado na lista da usuariomodel
    }

    static atualizar() {
        
    }

    static deletar(){
        
    }

}

module.exports = UsuarioModel;