import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import BolaComponent from './components/Bola/Bola';
import Telemovel from './components/Telemovel/Telemovel';
import ImageComponent from './components/ImageComponent/ImageComponent';

function App() {
  const [showBall, setShowBall] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/data.json');
        const dataJson = await response.json();

        setData(dataJson);
        debugger;
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    getData();
  }, []);

  const onLoadFuncion = () => {
    setLoadedImages(prevLoadedImages => prevLoadedImages + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      //setLoadedImages(prevLoadedImages => prevLoadedImages + 1);
    }, 100);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
      {data ? (
        <div>
          {loadedImages < 8 && (
            <div className="loading-container">
              <img src={"./imgs/back/" + loadedImages + ".png"} className="image-loading" alt={loadedImages} />
            </div>
          )}
          <div className={`custom-container`}>
            {showBall ? <BolaComponent topInicial={document.getElementById('matrecos').offsetTop + document.getElementById('matrecos').offsetHeight - 50} leftInicial={document.getElementById('matrecos').offsetLeft - 50} /> : null}
            <div className="custom-column">
              <ImageComponent data={data.chavena} image="chavena" onLoadFuncion={onLoadFuncion} />
              <ImageComponent data={data.viseu} image="viseu" onLoadFuncion={onLoadFuncion} />
              <ImageComponent data={data.dei} image="dei" onLoadFuncion={onLoadFuncion} />
              <ImageComponent data={data.banho} image="banho" onLoadFuncion={onLoadFuncion} />
            </div>
            <div className="custom-column sticky">
              <div className="img-container">
                <ImageComponent data={data.eu} image="eu" mouseOverOn={false} customClassName={"img-responsive"} onLoadFuncion={onLoadFuncion} />
                <h1 className="grafiti">Samuel Pires</h1>
              </div>
            </div>
            <div className="custom-column">
              <ImageComponent data={data.botanico} image="botanico" mouseOverOn={false} onLoadFuncion={onLoadFuncion} />
              <ImageComponent data={data.matrecos} image="matrecos" onClickFunction={() => { setShowBall(true) }} customMouseOver={true} onLoadFuncion={onLoadFuncion} />
              <Telemovel data={data.telemovel} onLoadFuncion={onLoadFuncion} />
            </div>
          </div>
        </div>
      ) : (
        <div className="loading-container">
          <img src={"./imgs/back/0.png"} className="image-loading" alt={0} />
        </div>
      )}
    </>
  );
}

export default App;
