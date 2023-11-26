import React, { useState } from 'react';
import '../TemperaturaSimulator.css';

function TemperaturaSimulator(){

    const[celsius, setCelsius] = useState('');
    const[fahrenheit, setFahrenheit] = useState('');
    const[resultado1, setResultado1] = useState(0);
    const[resultado2, setResultado2] = useState(0);

    function converter(){

        const result1 = (parseFloat(celsius) * 9 / 5) + 32;
        setResultado1(result1);
        const result2 = (parseFloat(fahrenheit) - 32) * 5 / 9 ;
        setResultado2(result2);

    }

    return(
        <div className='container'>
            <div className='itens'>
                <h1>Simulador de Temperatura</h1>
                <div className='inputs'>
                    <p>Digite a Temperatura (C°) para converter em Fahrenheit (F°)</p>
                    <input value={celsius} onChange={(e) => setCelsius(e.target.value)}/>
                    <p>Digite a Temperatura (F°) para converter em Celsius (C°)</p>
                    <input value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)}/>
                </div>
                <button onClick={converter} >Converter</button>
                <h2>Resultado</h2>
                <div className='resultado'>
                    <div>
                        <h3>C° para F°</h3>
                        <span>{resultado1}</span>
                    </div>
                    <div>
                        <h3>F° para C°</h3>
                        <span>{resultado2}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemperaturaSimulator;