import React from 'react';
import './Modal.css';


const ModalComponent = ({ setModalOpen, data }) => {
  return (
    <div className="background-style" onClick={setModalOpen}>
      <div className="modal-style">
        <div>
          <img className="img-style" src={data.gif} alt={data.titulo} />
        </div>
        <div>
          <h3>{data.titulo}</h3>
          <p>{data.descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
