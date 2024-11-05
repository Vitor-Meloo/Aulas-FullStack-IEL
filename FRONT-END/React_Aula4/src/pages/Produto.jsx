import { useParams } from "react-router-dom";

export const Produto = () => {

    const { id, nome } = useParams();


    return ( 
        <>
            <h1>Produto #{id} {nome}</h1>
        
        </>
     );
}
 
export default Produto;