import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useRef, useEffect } from 'react';
import eu from './imgs/eu.png';
import dei from './imgs/dei.png';
import chavena from './imgs/chavena.png';
import viseu from './imgs/viseu.png';
import lua from './imgs/lua.png';
import botanico from './imgs/botanico.png';
import matrecos from './imgs/matrecos.png';
import banho from './imgs/banho-1.png';
import telemovel from './imgs/telemovel.png';
import insta from './imgs/insta.jpg';
import linkedin from './imgs/linkedin.png';

function App() {
  const [modeType, setModeType] = useState('light-mode');
  const [posicaoBola, setPosicaoBola] = useState({ top: 0, left: 0 });
  const bolaRef = useRef(null);

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

  const [showLinkedin, setShowLinkedin] = useState(false);

  const handleMouseOver = () => {
    setShowLinkedin(true);
  };

  const handleMouseOut = () => {
    setShowLinkedin(false);
  };

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
        <div id="image-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <img src={telemovel} alt="telemovel" id="telemovel" className={`${modeType}-2`} />
          {showLinkedin ? (<h6 alt="hora" id="hora">{formattedTime}</h6>) : null}
          {!showLinkedin ? (<h2 alt="hora" id="hora2">{formattedTime}</h2>) : null}
          {showLinkedin ? (
            <a href="https://www.instagram.com/itzpires" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="insta" id="insta" className={`${modeType}-2`} />
            </a>
          ) : null}
          {showLinkedin ? (<img src={linkedin} alt="linkedin" id="linkedin" className={`${modeType}-2`} />) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
