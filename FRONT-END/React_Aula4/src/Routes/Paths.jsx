import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Produtos from "../pages/Produtos";
import PageLayout from "../Layouts/PageLayout";
import { NotFound } from "../pages/NotFound";
import Produto from "../pages/Produto";

export const Paths = () => {
    return ( 
    //Foi baixado o path de rotas do React
        <>
            <BrowserRouter>{/*Com isso foi liberado para poder usar esses elementos*/}
                <Routes >
                    <Route path="/" element={<PageLayout/>}>
                        <Route index element={<Home/>}/>{/*consigo separar as paginas*/}
                        <Route path="/produtos" element={<Produtos/>}/>{/* essa será outra pagina*/}
                        <Route path="/produto/:id/:nome" element={<Produto/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter> 
        
        </>

     );
}
 
export default Paths;