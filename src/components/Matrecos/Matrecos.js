import React, { useState, useEffect, useRef } from 'react';
import './Matrecos.css';

const Matrecos = ({ data, onFunction, onClickFunction }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const isMouseOverRef = useRef(false);
    const [isCustomMouseOverDone, setIsCustomMouseOverDone] = useState(false);

    useEffect(() => {
        isMouseOverRef.current = isMouseOver;
    }, [isMouseOver]);

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
                alt={"matrecos"}
                onMouseOver={() => {
                    if (!isCustomMouseOverDone) {
                        handleMouseOver();

                        setTimeout(() => {
                            if (isMouseOverRef.current) {
                                onFunction();
                                setIsCustomMouseOverDone(true);
                            }
                        }, 900);
                    }
                }}
                onMouseOut={handleMouseOut}
                id={"matrecos"}
                className={'scale'}
            />
        </div>
    );
};

export default Matrecos;
