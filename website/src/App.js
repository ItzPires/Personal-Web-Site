import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import eu from './imgs/eu.png';
import dei from './imgs/dei.png';
import chavena from './imgs/chavena.png';
import viseu from './imgs/viseu.png';
import lua from './imgs/lua.png';
import botanico from './imgs/botanico.png';
import matrecos from './imgs/matrecos.png';
import banho from './imgs/banho.png';

function App() {
  const [modeType, setModeType] = useState('light-mode');

  const toggleMode = () => {
    if (modeType === 'light-mode') {
      setModeType('dark-mode');
    } else {
      setModeType('light-mode');
    }
  }

  return (
    <div className={`custom-container ${modeType}`}>
      <div className="custom-column">
        <img src={chavena} alt="chavena" id="chavena" className={`${modeType}-2`} />
        <img src={viseu} alt="viseu" id="viseu" className={`${modeType}-2`} />
        <img src={dei} alt="dei" id="dei" className={`${modeType}-2`} />
        <img src={banho} alt="banho" id="banho" className={`${modeType}-2`} />
      </div>
      <div className="custom-column sticky">
        <img src={eu} alt="eu" className="img-responsive" />
        <h1 className="grafiti">Samuel Pires</h1>
      </div>
      <div className="custom-column">
        <img src={lua} alt="lua" id="lua" className={`${modeType}-2`} onClick={toggleMode} />
        <img src={botanico} alt="botanico" id="botanico" className={`${modeType}-2`} />
        <img src={matrecos} alt="matrecos" id="matrecos" className={`${modeType}-2`} />
      </div>
    </div>
  );
}

export default App;
