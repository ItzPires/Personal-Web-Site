import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import BolaComponent from './components/Bola';
import Telemovel from './components/Telemovel/Telemovel';
import ImageComponent from './components/ImageComponent/ImageComponent';

function App() {
  const [showBall, setShowBall] = useState(false);

  const basePath = './imgs/';

  return (
    <div className={`custom-container`}>
      {showBall ? <BolaComponent topInicial={ document.getElementById('matrecos').offsetTop } leftInicial={ document.getElementById('matrecos').offsetLeft } /> : null}
      <div className="custom-column">
        <ImageComponent basePath={basePath} image="chavena" mouseOverOn={false}/>
        <ImageComponent basePath={basePath} image="viseu" />
        <ImageComponent basePath={basePath} image="dei" />
        <ImageComponent basePath={basePath} image="banho" />
      </div>
      <div className="custom-column sticky">
        <div className="img-container">
          <img src={basePath + "eu.png"} alt="eu" className="img-responsive" />
          <h1 className="grafiti">Samuel Pires</h1>
        </div>
      </div>
      <div className="custom-column">
        <ImageComponent basePath={basePath} image="botanico" mouseOverOn={false}/>
        <ImageComponent basePath={basePath} image="matrecos" onClickFunction={() => {setShowBall(true)}} mouseOverOn={false}/>
        <Telemovel basePath={basePath} />
      </div>
    </div>
  );
}

export default App;
