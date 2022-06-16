import React from "react";
import Logo from '../../img/logo-footer.png'
function Footer(){
    return (
        <footer className="item-container">
            <img className="img-footer" src={Logo} alt="Logotipo netoneze" title="Logotipo footer"/>
                <p className="copyright">Copyright Netoneze - 2022</p>
        </footer>
    )
}
export default Footer;