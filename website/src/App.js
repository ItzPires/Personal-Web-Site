import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import ModalComponent from './components/Modal';
import BolaComponent from './components/Bola';
import Telemovel from './components/Telemovel/Telemovel';

function App() {
  const [modeType, setModeType] = useState('light-mode');
  const [showBall, setShowBall] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageModal, setImageModal] = useState("");

  const basePath = './imgs/';

  // Open and close modal
  const openModal = (image) => {
    setImageModal(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  // Switch between light and dark mode
  const toggleMode = () => {
    if (modeType === 'light-mode') {
      setModeType('dark-mode');
    } else {
      setModeType('light-mode');
    }
  }


  /*
    const [imageIndex, setImageIndex] = useState(0);
  
    const images = [banho1, banho2, banho3];
  
    let interval = 0;
  
    const nextImage = () => {
      setImageIndex((prevIndex) => {
        if (interval) {
          const nextIndex = prevIndex + 1;
          if (nextIndex > images.length - 1) {
            return 1;
          }
          return nextIndex;
        }
      });
    };
  
    const handleMouseEnter = () => {
      console.log('Mouse enter');
      if(!interval) {
        interval = setInterval(nextImage, 500);
      }
    };
  
    const handleMouseLeave = () => {
      console.log("antes " + imageIndex);
      clearInterval(interval);
      console.log("depois " + imageIndex);
      interval = null;
      console.log("depois2 " + imageIndex);
      setImageIndex(0);
    };*/

  return (
    <div className={`custom-container ${modeType}`}>
      {showBall ? <BolaComponent topInicial={ document.getElementById('matrecos').offsetTop } leftInicial={document.getElementById('matrecos').offsetLeft } /> : null}

      <div className="custom-column">
        <img src={basePath + "chavena.png"} onClick={() => openModal("chavena.png")} alt="chavena" id="chavena" className={`${modeType}-2`} />
        <img src={basePath + "viseu.png"} onClick={() => openModal("viseu.png")} alt="viseu" id="viseu" className={`${modeType}-2`} />
        <img src={basePath + "dei.png"} onClick={() => openModal("dei.png")} alt="dei" id="dei" className={`${modeType}-2`} />
        <img src={basePath + "banho.png"} onClick={() => openModal("banho.gif")} alt="banho" id="banho" className={`${modeType}-2`} />
      </div>
      <div className="custom-column sticky">
        <div className="img-container">
          <img src={basePath + "eu.png"} alt="eu" className="img-responsive" />
          <h1 className="grafiti">Samuel Pires</h1>
        </div>
      </div>
      <div className="custom-column">
        <img src={basePath + "lua.png"} alt="lua" id="lua" className={`${modeType}-2`} onClick={toggleMode} />
        <img src={basePath + "botanico.png"} onClick={() => openModal("botanico.png")} alt="botanico" id="botanico" className={`${modeType}-2`} />
        <img src={basePath + "matrecos.png"} onClick={() => setShowBall(true)} alt="matrecos" id="matrecos" className={`${modeType}-2`} />
        <Telemovel basePath={basePath} modeType={modeType} />
      </div>
      <ModalComponent
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={basePath + imageModal}
      />
    </div>
  );
}

export default App;
