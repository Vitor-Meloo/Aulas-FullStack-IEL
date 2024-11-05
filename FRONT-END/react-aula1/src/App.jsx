import Banner from "./components/Banner";
import Card from "./components/card";
import Carddinamico from "./components/carddinamico";
import Formadebolo from "./components/formadebolo";
import Header from "./components/header";
import { Componente1, Componente2, Componente3 } from "./components/varioscomponentes"; //Quando importa mais de um


const App = () => {
  return (
    //Parte visivel do componente
    <>
      {/*<Header />
    <Banner />
    <Componente1/>
    <Componente2/>
    <Componente3/>*/}
      {/*<Formadebolo sabor="Laranja" cobertura="Chocolate"/> 
    <Formadebolo sabor="Chocolate" cobertura="Chantily"/>*/}
      <Card 
        image={"https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/esportes-gerais-educacao-fisica.jpg"}
        title={"Noticia 1"}
        category={"esportes"}
        paragraph={" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem qui, magni animi incidunt doloremque doloribus distinctio! Omnis commodi accusantium velit doloribus incidunt provident neque ea quod natus, in iste nam?"}
      />
      <Card 
        image={"https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/esportes-gerais-educacao-fisica.jpg"}
        title={"Noticia 2"}
        category={"finanças e investimento"}
        paragraph={" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem qui, magni animi incidunt doloremque doloribus distinctio! Omnis commodi accusantium velit doloribus incidunt provident neque ea quod natus, in iste nam?"}
      />
      <Card 
        image={"https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/esportes-gerais-educacao-fisica.jpg"}
        title={"Noticia 3"}
        category={"culinaria"}
        paragraph={" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem qui, magni animi incidunt doloremque doloribus distinctio! Omnis commodi accusantium velit doloribus incidunt provident neque ea quod natus, in iste nam?"}
      />

      <Carddinamico>
        <h1>Noticia 4</h1>
        <img src="https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/esportes-gerais-educacao-fisica.jpg"/>
      </Carddinamico>
    </>
  );
}

export default App;