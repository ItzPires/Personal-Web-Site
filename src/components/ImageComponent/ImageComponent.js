import React, { useState } from 'react';
import ModalComponent from '../Modal/Modal';
import './ImageComponent.css';

const ImageComponent = ({ data, image, onClickFunction, customClassName, customMouseOver = false, mouseOverOn = true, onLoadFuncion }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isCustomMouseOverDone, setIsCustomMouseOverDone] = useState(false);
    const [openModal, setOpenModal] = useState(false);

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
                onLoad={() => {
                    if (onLoadFuncion) {
                        onLoadFuncion();
                    }
                }}
                className={`${customClassName ? customClassName : ''
                    }`}
            />
            {openModal ? <ModalComponent setModalOpen={() => setOpenModal(!openModal)} data={data}></ModalComponent> : null}
        </div>
    );
};

export default ImageComponent;
