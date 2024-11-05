import { useEffect, useState } from "react";

export const App = () => {

  const [count, setCount] = useState(0);//Quando o Usestate sofre uma alteração ele re-renderiza o componente
  const [count2, setCount2] = useState(0)//Essa state vai server pra ativar o useEffect 3


  function boasvindas(){//Nessa função, sempre que eu clicar no contador, o componente é renderizado, e ela aparece de novo, mas eu só quero que apareça uma vez
    alert("Boas vindas");
  }

  //boasvindas(); assim em vez de chamar essa função aqui fora, eu jogo ela no UseEffect 

  useEffect(() => {//1ª Assinatura: UseEffect é chamado sempre que o componente é renderizado na página
    console.log("Use Effect Foi chamado");
  });

  useEffect(() => {//2ª Assinatura: Aqui o useeffect só é chamado na primeira vez que o componente é montado
    boasvindas();//Aqui ela só vai aparecer uma vez
    console.log("UseEffect que vai ser chamado somente uma vez");
  }, []);

  useEffect(() => {//3ª Assinatura: Aqui o useeffect só é chamado quando uma dependence(state) é modificada
    console.log(`useEffect ativa somente por dependencias`);
  }, [count2]); //Só vai ser ativado quando o count2 for modificado

  return ( 
    <>
      <h1>Olá Mundo</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus corrupti corporis facilis. A accusantium eveniet facilis voluptatibus, numquam iusto laudantium dicta eos, quod ex beatae cupiditate, ipsa accusamus temporibus.</p>

      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>  Add </button>{/*Com isso o UseEffect irá ser chamado sempre que apertar o botão*/}

      <h2>Contador 2: {count2}</h2>
      <button onClick={() => setCount2(count2 + 1)}>  Add </button>{/*Botão demonstração useeffect 3*/}
    </>

   );
}

export default App;