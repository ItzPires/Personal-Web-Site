import React, { useState } from 'react';
import './ImageComponent.css';

const ImageComponent = ({ data, image, onClickFunction, mouseOverOn = true, onLoadFuncion }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseOver = () => {
        setIsMouseOver(true);
    };

    const handleMouseOut = () => {
        setIsMouseOver(false);
    };

    const currentImage = isMouseOver ? data.gif : data.png;

    return (
        <div>
            <img src={currentImage}
                onClick={() => {
                    onClickFunction(data);
                }}
                alt={image}
                onMouseOver={() => {
                    if (mouseOverOn) {
                        handleMouseOver();
                    }
                }}
                onMouseOut={handleMouseOut}
                id={image}
                onLoad={() => {
                    if (onLoadFuncion) {
                        onLoadFuncion();
                    }
                }}
                className={'scale'}
            />
        </div>
    );
};

export default ImageComponent;
