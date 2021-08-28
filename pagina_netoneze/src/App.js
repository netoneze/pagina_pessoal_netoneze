import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './style/css/principal.css'
import NavBar from "./components/navbar";
import Footer from "./components/footer";


/* Páginas */
import Home from './view/home';
import Projetos from './view/projetos';
import Contato from './view/contato';


function App() {
  return (
      <>
      <Router>
          <NavBar />
          <Route exact path='/' component={Home}/>
          <Route exact path='/projetos' component={Projetos}/>
          <Route exact path='/contato' component={Contato}/>
          <Footer />
      </Router>
      </>
  );
}

export default App;