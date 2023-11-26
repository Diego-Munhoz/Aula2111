import React, { useState } from 'react';
import baldur from '../img/gates.jpg';
import zelda from '../img/zeldatears.jpg';
import alan from '../img/alanwake.png';
import '../Votacao.css';

function Votacao() {

    const[opt1, setOpt1] = useState(0);
    const[opt2, setOpt2] = useState(0);
    const[opt3, setOpt3] = useState(0);

    function voteOption1(){
        setOpt1(opt1 + 1)
    }
    function voteOption2(){
        setOpt2(opt2 + 1)
    }
    function voteOption3(){
        setOpt3(opt3 + 1)
    }

    return(
        <div className='container'>
            <h1>Jogo do Ano</h1>
            <h2>Escolha o seu Jogo do Ano</h2>
            <div className='options'>
                <div onClick={voteOption1} className='card_options'>
                    <div>
                        <img src={baldur}/>
                        <div className='button_votar'>
                            <h2>Votar</h2>
                        </div>
                        <p>BALDUR’S GATE 3</p>
                        <h6>Larian Studios</h6>
                    </div>
                </div>
                <div onClick={voteOption2} className='card_options'>
                    <div>
                        <img src={zelda}/>
                        <div className='button_votar'>
                            <h2>Votar</h2>
                        </div>
                        <p>THE LEGEND OF ZELDA: TEARS OF THE KINGDOM</p>
                        <h6>Nintendo EPD/Nintendo</h6>
                    </div>
                </div>
                <div onClick={voteOption3} className='card_options'>
                    <div>
                        <img src={alan}/>
                        <div className='button_votar'>
                            <h2>Votar</h2>
                        </div>
                        <p>ALAN WAKE 2</p>
                        <h6>Remedy Entertainment/Epic Games Publishing</h6>
                    </div>
                </div>
            </div>
            <h3>Votação</h3>
            <div className='votacao'>
                <div className='vote'>
                    <h5>BALDUR’S GATE 3</h5>
                    <h4>{opt1}</h4>
                    <span>Voto</span>
                </div>
                <div className='vote'>
                    <h5>THE LEGEND OF ZELDA</h5>
                    <h4>{opt2}</h4>
                    <span>Voto</span>
                </div>
                <div className='vote'>
                    <h5>ALAN WAKE 2</h5>
                    <h4>{opt3}</h4>
                    <span>Voto</span>
                </div>
            </div>
        </div>
    );
}

export default Votacao;