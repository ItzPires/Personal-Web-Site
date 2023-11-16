import React, { useState } from 'react';
import ModalComponent from '../Modal/Modal';
import './ImageComponent.css';

const ImageComponent = ({ basePath, image, onClickFunction, customClassName, customMouseOver = false, mouseOverOn = true }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isCustomMouseOverDone, setIsCustomMouseOverDone] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleMouseOver = () => {
        setIsMouseOver(true);
    };

    const handleMouseOut = () => {
        setIsMouseOver(false);
    };

    const currentImage = isMouseOver ? image + ".gif" : image + ".png";

    return (
        <div>
            <img src={basePath + currentImage}
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
                className={`${customClassName ? customClassName : ''
                    }`}
            />
            {openModal ? <ModalComponent setModalOpen={() => setOpenModal(!openModal)} image={image}></ModalComponent> : null}
        </div>
    );
};

export default ImageComponent;
