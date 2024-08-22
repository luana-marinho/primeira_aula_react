import { useState } from "react";

function Contador() {

   //const [nome_estado, função_set_state] = useState(valor_inicial_do_estado)

   const [valor, setValor] = useState(0);

   function handleClick(){
      setValor(valor +1);

   }

  return (
    <div>
      
      <h2>Componente Contador</h2>

      <p>O valor atual do meu estado é: {valor}</p>

      <button onClick={handleClick}>Adicionar  +1</button>
      
    </div>
  )
}

export default Contador