import React from 'react';
import Tools from '../../img/tools.jpg';
import Skills from '../../img/skills.png';

function Home(){
    return (
            <main className="item-container">
                <div className="principal">
                    <div className="saudacoes-principal">
                        <h2 className="titulo-principal">Sobre o desenvolvedor</h2>

                        <img className="imagens-corpo" src={Tools} alt="development tools"/>

                        <p> Nelson Antonio Neto Toneze, estudante de engenharia de software na <strong>Universidade
                            Tecnológica Federal do Paraná</strong> em Cornélio Procópio - PR. Atualmente faz estágio
                            na Coordenadoria de Gestão de Tecnologia da Informação (COGETI), onde atua como
                            desenvolvedor web no front-end e back-end.
                        </p>
                    </div>
                    <div className="skills-principal">
                        <h3 className="titulo-principal">Habilidades</h3>

                        <div className="conteudo-skills">
                            <ul className="lista-skills">
                                <li className="itens">PHP</li>
                                <li className="itens">CSS/HTML5</li>
                                <li className="itens">Javascript/Jquery</li>
                                <li className="itens">Java</li>
                                <li className="itens">Python</li>
                                <li className="itens">Docker</li>
                                <li className="itens">Git/GitLab/GitHub</li>
                            </ul>
                            <img src={Skills} className="imagem-skills"/>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default Home;