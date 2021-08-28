import React from 'react';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';

function Contato(){
    return (
            <main className="item-container">
                <div className="principal">
                    <h2 className="titulo-principal">Entre em contato</h2>

                    <br/>

                    <h2 className="titulo-principal">Github</h2>
                    <a href="https://github.com/netoneze">
                        <img className="imagens-corpo" src={Github} alt="contato1"/>
                    </a>
                    <p> Página pessoal do GitHub</p>

                    <br/>

                    <h2 className="titulo-principal">LinkedIn</h2>
                    <a href="https://www.linkedin.com/in/nelson-antonio-neto-toneze-01b89352/">
                        <img className="imagens-corpo" src={Linkedin} alt="contato2"/>
                    </a>
                    <p> Página pessoal do LinkedIn</p>
                </div>
            </main>
    )
}

export default Contato;