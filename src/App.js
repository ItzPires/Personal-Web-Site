import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import BolaComponent from './components/Bola/Bola';
import Telemovel from './components/Telemovel/Telemovel';
import ImageComponent from './components/ImageComponent/ImageComponent';
import Matrecos from './components/Matrecos/Matrecos';

function App() {
  const [showBall, setShowBall] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('./data.json');
        const dataJson = await response.json();

        setData(dataJson);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    getData();
  }, []);

  return (
    <>
      {data ? (
        <div className={`custom-container`}>
          {showBall ? <BolaComponent topInicial={document.getElementById('matrecos').offsetTop + document.getElementById('matrecos').offsetHeight - 50} leftInicial={document.getElementById('matrecos').offsetLeft - 50} /> : null}
          <div className="custom-column">
            <ImageComponent data={data.chavena} image="chavena" />
            <ImageComponent data={data.viseu} image="viseu" />
            <ImageComponent data={data.dei} image="dei" />
            <ImageComponent data={data.banho} image="banho" />
          </div>
          <div className="custom-column sticky">
            <div className="img-container">
              <ImageComponent data={data.eu} image="eu" mouseOverOn={false} />
              <h1 className="grafiti">Samuel Pires</h1>
            </div>
          </div>
          <div className="custom-column">
            <ImageComponent data={data.botanico} image="botanico" />
            <Matrecos data={data.matrecos} onFunction={() => { setShowBall(true) }}/>
            <Telemovel data={data.telemovel} />
          </div>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </>
  );
}

export default App;
