import React, { useState, useEffect } from 'react';
import './Telemovel.css';

const Telemovel = ({ basePath, modeType }) => {
  const [showSocialMedia, setShowSocialMedia] = useState(false);

  const handleMouseOver = () => {
    setShowSocialMedia(true);
  };

  const handleMouseOut = () => {
    setShowSocialMedia(false);
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
  );
};

export default Telemovel;
