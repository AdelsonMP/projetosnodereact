import React, { useState } from 'react';

import './global.css';

// import Header from './Header.js';
import Routes from './routes';

function App() {
  // const [counter, setCounter] = useState(0);

  /* function increment() {
    setCounter(counter + 1);
  } */

  return (
    <div>
      {/* <Header>Contador={counter}</Header>
      <button onClick={increment}>Incrementar</button> */}
      <div>
        <Routes />
      </div>
    </div>

  );
}

export default App;
