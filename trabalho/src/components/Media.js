import React, { useState } from 'react';
import '../Media.css';


function Media(){

    const[nota1, setNota1] = useState('');
    const[nota2, setNota2] = useState('');
    const[nota3, setNota3] = useState('');

    function calcularMedia(){

        const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

        if(media < 4){
            alert('O aluno está Reprovado!');
        } else if(media > 4 && media < 6){
            alert('O aluno está de Recuperação!');
        } else if(media > 6){
            alert('O aluno está Aprovado!');
        }

    }

    return(
        <div className='container'>
            <h1>Calculadora de Média</h1>
            <p>Digite a 1º nota do Aluno:</p>
            <input value={nota1} onChange={(e) => setNota1(e.target.value)}/>
            <p>Digite a 2º nota do Aluno:</p>
            <input value={nota2} onChange={(e) => setNota2(e.target.value)}/>
            <p>Digite a 3º nota do Aluno:</p>
            <input value={nota3} onChange={(e) => setNota3(e.target.value)}/>
            <br></br>
            <button onClick={calcularMedia}>Calcular Média</button>
        </div>
    );
}
export default Media;