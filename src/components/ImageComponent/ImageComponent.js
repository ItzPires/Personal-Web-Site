import React, { useState } from 'react';
import ModalComponent from '../Modal/Modal';
import './ImageComponent.css';

const ImageComponent = ({ data, image, mouseOverOn = true }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
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
                        handleMouseOver();
                    }
                }}
                onMouseOut={handleMouseOut}
                id={image}
                className={'scale'}
            />
            {openModal ? <ModalComponent setModalOpen={() => setOpenModal(!openModal)} data={data}></ModalComponent> : null}
        </div>
    );
};

export default ImageComponent;
