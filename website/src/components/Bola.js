import { React, useState, useEffect } from 'react';
import './Bola.css';

const BolaComponent = ({ topInicial, leftInicial }) => {
    const [posicaoBola, setPosicaoBola] = useState({ top: topInicial, left: leftInicial });

    const basePath = './imgs/';

    function gerarCoordenadas() {
        const larguraTela = window.innerWidth;
        const alturaTela = window.innerHeight;
        const larguraBola = 50;
        const alturaBola = 50;
        const top = Math.floor(Math.random() * (alturaTela - alturaBola));
        const left = Math.floor(Math.random() * (larguraTela - larguraBola));
        return { top, left };
    }

    function animarBola() {
        const coordenadas = gerarCoordenadas();
        setPosicaoBola(coordenadas);
    }

    return (
        <img
            src={basePath + "bola.png"}
            className="bola"
            id="bola"
            style={{ top: posicaoBola.top, left: posicaoBola.left }}
            onClick={animarBola} />
    );
};

export default BolaComponent;
