import React from "react";

import Proj1 from '../../img/proj1.png'
import Proj2 from '../../img/proj2.png'
import Proj3 from '../../img/proj3.png'
import Proj4 from '../../img/proj4.png'


function Projetos() {

    return (
            <main className="item-container" id="itemPrincipal">
                <div className="principal">
                    <div className="saudacoes-principal">
                        <h4 className="titulo-principal">Projetos</h4>
                    </div>
                    <h2 className="titulo-principal">Nobi's World Adventure</h2>
                    <a href="https://play.google.com/store/apps/details?id=com.netoneze.NobisWorldAdventure&hl=pt">
                        <img className="imagens-corpo imagens-corpo-proj" src={Proj1} alt="projeto1" title="Game 1"/>
                    </a>
                    <p>
                        Um jogo estilo <i>Runner</i> para <strong>Android</strong>, desenvolvido em C# com o auxílio da
                        ferramenta <strong>Unity</strong>.
                    </p>

                    <br/>

                    <h2 className="titulo-principal titulo-projeto">Super Adventure Kid</h2>
                    <a href="https://play.google.com/store/apps/details?id=com.netoneze.SuperAdventureKidFree&hl=pt">
                        <img className="imagens-corpo imagens-corpo-proj" src={Proj2} alt="projeto2" title="Game 2"/>
                    </a>
                    <p>
                        Um jogo estilo <i>Runner</i> para <strong>Android</strong>, desenvolvido em C# com o auxílio
                        da ferramenta <strong>Unity</strong>.
                    </p>

                    <br/>

                    <h2 className="titulo-principal titulo-projeto titulo-projeto-proj3">NelsonGenda (Work in Progress)</h2>
                    <a href="https://play.google.com/store/apps/details?id=com.nelsongenda.agenda&hl=pt">
                        <img className="imagens-corpo imagens-corpo-proj" src={Proj3} alt="projeto3" title="NelsonGenda"/>
                    </a>
                    <p>
                        Uma <strong>agenda</strong> simples e fácil de ser usada. Desenvolvido em Java com o
                        auxílio do <strong>Android Studio</strong>.
                    </p>

                    <br/>

                    <h2 className="titulo-principal titulo-projeto">JPedidos</h2>
                    <a href="https://github.com/netoneze/JPedidos">
                        <img className="imagens-corpo imagens-corpo-proj" src={Proj4} alt="projeto4" title="Jpedidos"/>
                    </a>
                    <p>
                        Um <strong>sistema de pedidos</strong> feito em Java, com base de dados em MySQL.
                    </p>
                </div>
            </main>
    );
}

export default Projetos;