import { useState } from "react";

export const Button = () => {
    const [contador, SetContador] = useState(0)
    //
    return ( 
        <button onClick={() => (SetContador(contador + 1))}>Click me {contador}</button>
     );
}

export default  Button;