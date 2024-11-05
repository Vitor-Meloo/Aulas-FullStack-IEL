import { Link } from "react-router-dom";

export const Produtos = () => {
    return ( 
        <>
        <h1>Produtos</h1>
        <ul>
            <li ><Link to={"/produto/id1/Abacate"}>Abacate</Link></li>
            <li ><Link to={"/produto/id2/Banana"}>Banana</Link></li>
            <li ><Link to={"/produto/id3/Cenoura"}>Cenoura</Link></li>
            <li ><Link to={"/produto/id4/Framboesa"}>Framboesa</Link></li>
            <li ><Link to={"/produto/id5/Maçã"}>Maçã</Link></li>
        </ul>
        </>
     );
}
 
export default Produtos;