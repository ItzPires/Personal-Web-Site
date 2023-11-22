import React, { useState, useEffect } from 'react';
import './Telemovel.css';

const Telemovel = ({ data }) => {
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
      <img src={data.png} alt="telemovel" id="telemovel" />
      {showSocialMedia ? (<h6 alt="hora" id="hora">{formattedTime}</h6>) : null}
      <div>
        {!showSocialMedia ? (<h2 alt="hora" id="hora2">{formattedTime}</h2>) : null}
        {showSocialMedia ? (
          <a href={data.insta} target="_blank" rel="noopener noreferrer">
            <img src={data.instaImage} alt="insta" id="insta" />
          </a>
        ) : null}
        {showSocialMedia ? (
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={data.linkedinImage} alt="linkedin" id="linkedin" />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Telemovel;
