import React, { useState, useEffect } from 'react';
import './ImageComponent.css';

const ImageComponent = ({ basePath, image, onClickFunction, customClassName, customMouseOver = false, mouseOverOn = true }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isCustomMouseOverDone, setIsCustomMouseOverDone] = useState(false);

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
                    if (customMouseOver) {
                        if (!isCustomMouseOverDone) {
                            handleMouseOver();

                            setTimeout(() => {
                                onClickFunction();
                                setIsCustomMouseOverDone(true);
                            }, 900);
                        }
                    }
                    else {
                        handleMouseOver();
                    }
                }
            }}
            onMouseOut={handleMouseOut}
            id={image}
            className={`${customClassName ? customClassName : ''
                }`}
        />
    );
};

export default ImageComponent;
