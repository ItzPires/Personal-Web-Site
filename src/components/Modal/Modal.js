import React, { useEffect, useState } from 'react';
import './Modal.css';


const ModalComponent = ({ setModalOpen, image }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const response = await fetch('/data.json');
        const dadosJson = await response.json();
        setDados(dadosJson[image]);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    carregarDados();
  }, []);


  return (
    <div className="background-style" onClick={setModalOpen}>
      <div className="modal-style">
        {dados ? (
          <>
            <div>
              <img className="img-style" src={dados.gif} alt="Imagem de perfil" />
            </div>
            <div>
              <h3>{dados.titulo}</h3>
              <p>{dados.descricao}</p>
            </div>
          </>
        ) : (
          <p>Carregando dados...</p>
        )}
      </div>
    </div>
  );
};

export default ModalComponent;
