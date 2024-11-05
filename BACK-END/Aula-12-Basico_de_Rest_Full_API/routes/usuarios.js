class Usuarios {

    static lista = [
        {
            
        }
    ];

    static listar(){ 
        return Usuarios.lista;
    }
    
    static adicionar(id, nome, valor){ 
        Usuarios.lista.push({
            id: id,
            nome: nome,
            login: login
        });
    }
 
    static editar(indice){
        
    }

    static excluir(indice){  
        Usuarios.lista.splice(indice, 1)  
        console.log(Usuarios.lista);    
    }
}

module.exports = Usuarios;