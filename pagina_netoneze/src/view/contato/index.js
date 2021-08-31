import React from 'react';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';

function Contato(){
    return (
            <main className="item-container" id="itemPrincipal">
                <div className="principal">
                    <div className="saudacoes-principal">
                        <h2 className="titulo-principal">Entre em contato</h2>
                    </div>

                    <br/>
                    <div className="contato-principal">
                        <h2>Github</h2>
                        <p> Página pessoal do GitHub</p>
                        <a href="https://github.com/netoneze">
                            <img className="imagens-corpo imagens-corpo-contato" src={Github} alt="contato1" title="Logotipo Github"/>
                        </a>

                        <br/>

                        <h2>LinkedIn</h2>
                        <p> Página pessoal do LinkedIn</p>
                        <a href="https://www.linkedin.com/in/nelson-antonio-neto-toneze-01b89352/">
                          <img className="imagens-corpo imagens-corpo-contato" src={Linkedin} alt="contato2" title="Logotipo LinkedIn"/>
                        </a>
                    </div>
                </div>
            </main>
    )
}

export default Contato;