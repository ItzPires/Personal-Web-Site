import React, { useState } from 'react';
import './ImageComponent.css';

const ImageComponent = ({ basePath, image, onClickFunction, mouseOverOn = true }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseOver = () => {
        setIsMouseOver(true);
    };

    const handleMouseOut = () => {
        setIsMouseOver(false);
    };

    const currentImage = isMouseOver ? image + ".gif" : image + ".png";

    return (
        <img src={basePath + currentImage}
            onClick={() => {
                if (onClickFunction) {
                    onClickFunction();
                }
            }}
            alt={image}
            onMouseOver={() => {
                if (mouseOverOn) {
                    handleMouseOver();
                }
            }}
            onMouseOut={handleMouseOut}
            id={image} />
    );
};

export default ImageComponent;
