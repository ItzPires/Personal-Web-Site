import React from 'react';
import './ImageComponent.css';

const ImageComponent = ({ basePath, image, onClickFunction }) => {

  return (
    <img src={basePath + image + ".png"} onClick={() => onClickFunction()} alt={image} id={image} />
  );
};

export default ImageComponent;
