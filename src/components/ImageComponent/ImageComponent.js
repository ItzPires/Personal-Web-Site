import React, { useState } from 'react';
import './ImageComponent.css';

const ImageComponent = ({ data, image, onClickFunction, mouseOverOn = true }) => {
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
                className={'scale'}
            />
        </div>
    );
};

export default ImageComponent;
