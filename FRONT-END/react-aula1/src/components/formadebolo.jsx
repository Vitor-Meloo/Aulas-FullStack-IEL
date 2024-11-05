const Formadebolo = (props) => {//Props é um objeto que recebe propriedades
    //também poderia ser escrito como const Formadebolo = ({sabor, cobertura}) e não precisaria escrever props.sabor no H1
    return ( 
        <h1>Bolo de {props.sabor} com cobertura de {props.cobertura}</h1>
     );
}
 
export default Formadebolo;