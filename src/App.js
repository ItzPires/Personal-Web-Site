import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import BolaComponent from './components/Bola/Bola';
import Telemovel from './components/Telemovel/Telemovel';
import ImageComponent from './components/ImageComponent/ImageComponent';
import Matrecos from './components/Matrecos/Matrecos';
import ModalComponent from './components/Modal/Modal';

function App() {
  const [showBall, setShowBall] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState(null);
  const [dataToModal, setDataToModal] = useState(null);

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

  const handleClick = (imageData) => {
    setDataToModal(imageData);
    setOpenModal(true);
  };
  

  return (
    <>
      {data ? (
        <div>
          <div className={`custom-container`}>
            {showBall ? <BolaComponent topInicial={document.getElementById('matrecos').offsetTop + document.getElementById('matrecos').offsetHeight - 50} leftInicial={document.getElementById('matrecos').offsetLeft - 50} /> : null}
            <div className="custom-column">
              <ImageComponent data={data.chavena} image="chavena" onClickFunction={handleClick} />
              <ImageComponent data={data.viseu} image="viseu" onClickFunction={handleClick} />
              <ImageComponent data={data.dei} image="dei" onClickFunction={handleClick} />
              <ImageComponent data={data.banho} image="banho" onClickFunction={handleClick} />
            </div>
            <div className="custom-column sticky">
              <div className="img-container">
                <ImageComponent data={data.eu} image="eu" mouseOverOn={false} onClickFunction={handleClick} />
                <h1 className="grafiti">Samuel Pires</h1>
              </div>
            </div>
            <div className="custom-column">
              <ImageComponent data={data.botanico} image="botanico" onClickFunction={handleClick} />
              <Matrecos data={data.matrecos} onFunction={() => { setShowBall(true) }} onClickFunction={handleClick} />
              <Telemovel data={data.telemovel} />
            </div>
          </div>
          {openModal ? <ModalComponent setModalOpen={() => setOpenModal(!openModal)} data={dataToModal}></ModalComponent> : null}
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </>
  );
}

export default App;
