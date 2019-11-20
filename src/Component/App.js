import React,{Component} from 'react';
import Grid from './grid';

import Home from './Home';
import '../style/style.css';
import { BrowserRouter as Router,Link } from "react-router-dom";

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component{
  render(){
    return(
      <Router>
      <div className="header">
        <div className="container warna">
          <nav className="navbar navbar-expand-lg navbar-light warna">
            <Link className="navbar-brand" to=""><img className="logo" src={require('../logo/logo.png')} alt="logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m1-auto">
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                    PROMO
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="">PROMO</Link>
                    <Link class="dropdown-item" to="#">Partnership</Link>
              </div>
               </li>
               
               <li className="nav-item dropdown">
               <Link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                    PAKET & ADD-ON
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="">Action</Link>
                    <Link class="dropdown-item" to="">Another Action</Link>
                    <div className="dropdown-divider"></div>
                    </div>
               </li>
               <li className="nav-item">
                 <Link className="nav-link">PUSAT BANTUAN</Link>
               </li>
               </ul>
            </div>
          </nav>
        </div>
        <div className="">
        <Home/>
      </div>
      </div>
      </Router>
    )
  }
}
 

export default App;
