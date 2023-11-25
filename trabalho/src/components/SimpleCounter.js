import React, { useState } from "react";
import '../SimpleCounter.css';


function SimpleCounter() {

    const[num, setNum] = useState(0);

    function addCounter() {
        setNum(num + 1);
    }

    function removeCounter() {
        setNum(num - 1);
    }

    return(
        <div className="counter">
            <div className="itens">
                <h1>Contador Simples</h1>
                <span>{num}</span>
                <div className="buttons">
                    <button onClick={addCounter}>Adicionar</button>
                    <button onClick={removeCounter}>Remover</button>
                </div>
            </div>
        </div>
    );
}

export default SimpleCounter;