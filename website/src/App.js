import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useRef, useEffect } from 'react';
import CustomModal from './components/asd';

function App() {
  const [modeType, setModeType] = useState('light-mode');
  const [posicaoBola, setPosicaoBola] = useState({ top: 0, left: 0 });
  const bolaRef = useRef(null);
  const [showSocialMedia, setshowSocialMedia] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageModal, setImageModal] = useState("");

  const basePath = './imgs/';

  // Display social media icons in the phone image
  const handleMouseOver = () => {
    setshowSocialMedia(true);
  };

  const handleMouseOut = () => {
    setshowSocialMedia(false);
  };

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

  // Função para gerar coordenadas aleatórias dentro da área visível da tela
  function gerarCoordenadas() {
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;
    const larguraBola = bolaRef.current.offsetWidth;
    const alturaBola = bolaRef.current.offsetHeight;
    const top = Math.floor(Math.random() * (alturaTela - alturaBola));
    const left = Math.floor(Math.random() * (larguraTela - larguraBola));
    return { top, left };
  }

  function posicionarBola() {
    const coordenadas = gerarCoordenadas();
    debugger;
    setPosicaoBola(coordenadas);
    var a = posicaoBola;
    debugger;
  }

  // Função para animar a bola até um novo local aleatório dentro da área visível da tela
  function animarBola() {
    const coordenadas = gerarCoordenadas();
    bolaRef.current.style.transform = `translate(${coordenadas.left}px, ${coordenadas.top}px)`;
    setPosicaoBola(coordenadas);
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

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}`;

  return (
    <div className={`custom-container ${modeType}`}>
      <div className="custom-column">
        <img src={basePath + "chavena.png"} onClick={() => openModal("chavena.png")} alt="chavena" id="chavena" className={`${modeType}-2`} />
        <img src={basePath + "viseu.png"} onClick={() => openModal("viseu.png")} alt="viseu" id="viseu" className={`${modeType}-2`} />
        <img src={basePath + "dei.png"} onClick={() => openModal("dei.png")} alt="dei" id="dei" className={`${modeType}-2`} />
        <img src={basePath + "banho-1.png"} onClick={() => openModal("banho.gif")} alt="banho" id="banho" className={`${modeType}-2`} />
      </div>
      <div className="custom-column sticky">
        <img src={basePath + "eu.png"} alt="eu" className="img-responsive" />
        <h1 className="grafiti">Samuel Pires</h1>
      </div>
      <div className="custom-column">
        <img src={basePath + "lua.png"} alt="lua" id="lua" className={`${modeType}-2`} onClick={toggleMode} />
        <img src={basePath + "botanico.png"} onClick={() => openModal("botanico.png")} alt="botanico" id="botanico" className={`${modeType}-2`} />
        <img src={basePath + "matrecos.png"} onClick={() => openModal("matrecos.png")} alt="matrecos" id="matrecos" className={`${modeType}-2`} />
        <div id="image-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <img src={basePath + "telemovel.png"} alt="telemovel" id="telemovel" className={`${modeType}-2`} />
          {showSocialMedia ? (<h6 alt="hora" id="hora">{formattedTime}</h6>) : null}
          <div>
            {!showSocialMedia ? (<h2 alt="hora" id="hora2">{formattedTime}</h2>) : null}
            {showSocialMedia ? (
              <a href="https://www.instagram.com/itzpires" target="_blank" rel="noopener noreferrer">
                <img src={basePath + "insta.jpg"} alt="insta" id="insta" className={`${modeType}-2`} />
              </a>
            ) : null}
            {showSocialMedia ? (
              <a href="https://www.linkedin.com/in/samuelpires99/" target="_blank" rel="noopener noreferrer">
                <img src={basePath + "linkedin.png"} alt="linkedin" id="linkedin" className={`${modeType}-2`} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={basePath + imageModal}
      />
    </div>
  );
}

export default App;
