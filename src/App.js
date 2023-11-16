import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import BolaComponent from './components/Bola';
import Telemovel from './components/Telemovel/Telemovel';
import ImageComponent from './components/ImageComponent/ImageComponent';

function App() {
  const [showBall, setShowBall] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);

  const basePath = './imgs/';

  const onLoadFuncion = () => {
    //setLoadedImages(prevLoadedImages => prevLoadedImages + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadedImages(prevLoadedImages => prevLoadedImages + 1);
    }, 100);

    return () => clearInterval(interval);

  }, []);

  return (
    <div>
      {loadedImages < 9 && (
        <div className="loading-container">
          <img src={basePath + "/back/" + loadedImages + ".png"} className="image-loading" alt={loadedImages} />
        </div>
      )}
      <div className={`custom-container`}>
        {showBall ? <BolaComponent topInicial={document.getElementById('matrecos').offsetTop} leftInicial={document.getElementById('matrecos').offsetLeft} /> : null}
        <div className="custom-column">
          <ImageComponent basePath={basePath} image="chavena" mouseOverOn={false} onLoadFuncion={() => { onLoadFuncion() }} />
          <ImageComponent basePath={basePath} image="viseu" onLoadFuncion={() => { onLoadFuncion() }} />
          <ImageComponent basePath={basePath} image="dei" onLoadFuncion={() => { onLoadFuncion() }} />
          <ImageComponent basePath={basePath} image="banho" onLoadFuncion={() => { onLoadFuncion() }} />
        </div>
        <div className="custom-column sticky">
          <div className="img-container">
            <img src={basePath + "eu.png"} alt="eu" className="img-responsive" />
            <h1 className="grafiti">Samuel Pires</h1>
          </div>
        </div>
        <div className="custom-column">
          <ImageComponent basePath={basePath} image="botanico" mouseOverOn={false} onLoadFuncion={() => { onLoadFuncion() }} />
          <ImageComponent basePath={basePath} image="matrecos" onClickFunction={() => { setShowBall(true) }} customMouseOver={true} onLoadFuncion={() => { onLoadFuncion() }} />
          <Telemovel basePath={basePath} onLoadFuncion={() => { onLoadFuncion() }} />
        </div>
      </div>
    </div>
  );
}

export default App;
