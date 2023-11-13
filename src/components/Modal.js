import React from 'react';
import Modal from 'react-modal';
import './Modal.css';

const customStyles = {
  content: {
    width: '50%',
    height: '50%',
    margin: 'auto',
    borderRadius: '20px',
  },
};


class ModalComponent extends React.Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        style={customStyles}
      >

        <div class="parent">
          <div class="image-container">
            < img src={this.props.imageUrl} alt="Imagem" className="modal-image"/>
          </div>
          <div class="text-container">
            <h2>Título do Modal</h2>
            <p>Texto do modal aqui.</p>
            <button onClick={this.props.onRequestClose}>Fechar</button>
          </div>
        </div>

      </Modal>
    );
  }
}

export default ModalComponent;
