import React from 'react';
import './App.scss';
import Transaction from './js/views/Transaction'
import Steps from './js/components/Steps'

function App() {
  return (
    <div className="App">
      <div className="header">

        <Steps />
      </div>
      <Transaction />
    </div>
  );
}

export default App;
