import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/logo.png';

function NavBar(){

    return (
        <header className="item-container">
            <div className="caixa-superior row">
                <img src={Logo} className="img-logo-caixa-superior"
                     alt="Logotipo Netoneze" title="Logotipo superior Netoneze"/>
                    <nav>
                        <ul>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/projetos">Projetos</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </nav>
            </div>
        </header>
    )
}

export default NavBar;