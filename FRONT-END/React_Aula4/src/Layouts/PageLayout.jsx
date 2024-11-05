import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export const PageLayout = () => {
    return ( 
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
     );
}
 
export default PageLayout;