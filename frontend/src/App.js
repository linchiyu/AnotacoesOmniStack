import React, { useState } from 'react';

import Header from './Header';
/*Componente App*/
function App() {
  const [counter, setCounter] = useState(0);

  //useState = [valor, função de atualização]

  function increment() {
    setCounter(counter+1);
  }

  return (
    <div>
      <Header title='Semana OmniStack'>Children semana OmniStack
        Contador: { counter }</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
