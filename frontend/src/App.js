import React, { useState } from 'react';


import './global.css';

import Routes from './routes';


function App() {
  return (
    <Routes />
  );
}



/*import Logon from './pages/Logon';
function App() {
  return (
    <Logon />
  );
}*/


/*import Header from './Header';*/
/*Componente App*/
/*function App() {
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
}*/

export default App;
