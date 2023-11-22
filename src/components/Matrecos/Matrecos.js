import React, { useState, useEffect, useRef } from 'react';
import ModalComponent from '../Modal/Modal';
import './Matrecos.css';

const Matrecos = ({ data, onFunction }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const isMouseOverRef = useRef(false);
    const [openModal, setOpenModal] = useState(false);
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
                    setOpenModal(true);
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
            {openModal ? <ModalComponent setModalOpen={() => setOpenModal(!openModal)} data={data}></ModalComponent> : null}
        </div>
    );
};

export default Matrecos;
