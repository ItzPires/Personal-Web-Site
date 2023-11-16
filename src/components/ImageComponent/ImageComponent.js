import React, { useState, useEffect } from 'react';
import './ImageComponent.css';

const ImageComponent = ({ basePath, image, onClickFunction, customMouseOver = false, mouseOverOn = true, onLoadFuncion }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isCustomMouseOver, setIsCustomMouseOver] = useState(false);

    const handleMouseOver = () => {
        setIsMouseOver(true);
    };

    const handleMouseOut = () => {
        setIsMouseOver(false);
    };

    useEffect(() => {
        if (customMouseOver) {
            setTimeout(() => {
                onClickFunction();
                setIsCustomMouseOver(true);
            }, 1400);
        }
    }, [customMouseOver]);

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
                if (mouseOverOn && !isCustomMouseOver) {
                    handleMouseOver();
                }
            }}
            onMouseOut={handleMouseOut}
            onLoad={() => {
                if (onLoadFuncion) {
                    onLoadFuncion();
                }
            }}
            id={image} />
    );
};

export default ImageComponent;
