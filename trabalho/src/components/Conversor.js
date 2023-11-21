import React, { useState } from 'react';
import '../Conversor.css';

function Conversor(){

    const[moeda, setMoeda] = useState('');
    const[resultado, setResultado] = useState('');

    function conversor(){
        const moedaConvertida = moeda / 5;
        setResultado(moedaConvertida);
    }

    return(
        <div className='container'>
            <h1>Conversor de Moeda</h1>
            <p>Digite o valor da Moeda(real):</p>
            <input value={moeda} onChange={(e) => setMoeda(e.target.value)}/>
            <div className='resultado'>{resultado !== null && <p>O valor convertido em Dólar é: {resultado}</p>}</div>
            <br></br>
            <button onClick={conversor}>Converter Moeda</button>
        </div>
    );
}
export default Conversor;