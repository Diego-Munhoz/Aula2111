import React, { useState } from 'react';
import baldur from '../img/gates.jpg';
import zelda from '../img/zeldatears.jpg';
import alan from '../img/alanwake.png';
import '../Votacao.css';

function Votacao() {

    return(
        <div className='container'>
            <h1>Votação para Jogo do Ano</h1>
            <h2>Opções de Jogo do Ano</h2>
            <div className='options'>
                <div className='card_options'>
                    <div className='card'>
                        <img src={baldur}/>
                        <p>Baldur's Gate III</p>
                        <span>Opção 1</span>
                    </div>
                </div>
                <div className='card_options'>
                    <div className='card'>
                        <img src={zelda}/>
                        <p>Zelda</p>
                        <span>Opção 2</span>
                    </div>
                </div>
                <div className='card_options'>
                    <div className='card'>
                        <img src={alan}/>
                        <p>Alan Wake II</p>
                        <span>Opção 3</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Votacao;