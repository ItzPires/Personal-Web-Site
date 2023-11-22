import React, { useState, useRef, useEffect } from 'react';
import ModalComponent from '../Modal/Modal';
import './ImageComponent.css';

const ImageComponent = ({ data, image, onClickFunction, customClassName, customMouseOver = false, mouseOverOn = true }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const isMouseOverRef = useRef(false);
    const [isCustomMouseOverDone, setIsCustomMouseOverDone] = useState(false);
    const [openModal, setOpenModal] = useState(false);

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
                    setOpenModal(true);
                }}
                alt={image}
                onMouseOver={() => {
                    if (mouseOverOn) {
                        if (customMouseOver) {
                            if (!isCustomMouseOverDone) {
                                handleMouseOver();

                                setTimeout(() => {
                                    if (isMouseOverRef.current) {
                                        onClickFunction();
                                        setIsCustomMouseOverDone(true);
                                    }
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
                className={`${customClassName ? customClassName : 'scale'
                    }`}
            />
            {openModal ? <ModalComponent setModalOpen={() => setOpenModal(!openModal)} data={data}></ModalComponent> : null}
        </div>
    );
};

export default ImageComponent;
