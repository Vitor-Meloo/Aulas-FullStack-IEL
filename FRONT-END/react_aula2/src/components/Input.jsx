import { useRef } from "react";

export const Input = () => {

    //const [nome, setNome] = useState("");
    const nome = useRef("")
    console.log("Re-renderizou");
    return ( 
        <>
            <input 
                type="text" 
                placeholder="Digite seu nome"
                //onChange={(e) => nome.current = e.target.value}
                ref={nome}
            />
            <button onClick={() => console.log(nome.current.value)}>Mostrar</button>
            <h1>{nome.current}</h1>
        </>
     );
}
 
export default Input;