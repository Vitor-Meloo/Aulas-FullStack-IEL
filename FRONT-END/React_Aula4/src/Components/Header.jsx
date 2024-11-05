import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: blueviolet;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;

    & h1{
        color: #FFFFFF;
    }

    & nav ul{
        display: flex;
        gap: 36px;
        & li a{
            color: #FFFFFF80;
            text-decoration: none;
            font-size: 18px;
            &:hover, &.active{
                color: #FFFFFF;
            }
        }
    }
`;

export const Header = () => {
    return ( 
        
        <HeaderContainer>
                <h1>LOGO</h1>
                <nav>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
                    </ul>
                </nav>
        </HeaderContainer>
     );
}
 
export default Header;