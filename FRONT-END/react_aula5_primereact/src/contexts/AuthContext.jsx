import { createContext, useState } from "react";

const Context = createContext();

export const AuthContext = ({children}) => {

    const [logado, setLogado] = useState(false);

    return (
        <>
            <Context.Provider value={{logado, setLogado}}>
               {children} 
            </Context.Provider> 
        
        </>

    );
}