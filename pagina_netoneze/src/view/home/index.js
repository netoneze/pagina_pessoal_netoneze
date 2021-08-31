import React from 'react';
import Perfil from '../../img/perfil.jpg';
import Skills from '../../img/skills.png';

function Home(){
    return (
            <main className="item-container">
                <div className="principal">
                    <div className="saudacoes-principal">
                        <h2 className="titulo-principal">Sobre mim</h2>

                        <img className="imagens-corpo" src={Perfil} alt="Imagem de perfil" title="Imagem de perfil Nelson"/>

                        <div className="texto-corpo">
                            <p> Olá, tudo bem? <br/> Meu nome é Nelson Antonio Neto Toneze, estudo engenharia de software na <strong>Universidade
                            Tecnológica Federal do Paraná</strong> em Cornélio Procópio - PR. <br/> Atualmente sou estagiário
                            na Coordenadoria de Gestão de Tecnologia da Informação (COGETI) da universidade, onde atuo como
                            desenvolvedor web full-stack. <br/>
                            Sou apaixonado por tecnologia, principalmente envolvendo smartphones, wearables e games 📱 ⌚️ 🎮
                            </p>
                        </div>

                    </div>
                    <div className="skills-principal">
                        <h3 className="titulo-principal">Linguagens e ferramentas que utilizo</h3>

                        <div className="conteudo-skills">
                            <ul className="lista-skills">
                                <li className="itens">Java</li>
                                <li className="itens">PHP</li>
                                <li className="itens">CSS/HTML5</li>
                                <li className="itens">Javascript/Jquery/ReactJs</li>
                                <li className="itens">Python</li>
                                <li className="itens">Docker</li>
                                <li className="itens">Android Studio</li>
                                <li className="itens">Git/GitLab/GitHub</li>
                            </ul>
                            <img src={Skills} className="imagem-skills" alt="Skills" title="Imagem de skills"/>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default Home;