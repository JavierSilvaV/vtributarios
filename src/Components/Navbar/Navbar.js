import React, { Component, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/LogoV.png";
import { Link, animateScroll as scroll } from "react-scroll";
import Arrow from '@mui/icons-material/KeyboardArrowDown';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  scrollTo = () => {
    scroll.scrollTo("inicio");
  };

  render() {
    return (
    <section className="navbar">
      <div className="nav">
  <input type="checkbox" id="nav-check"></input>
  <div className="nav-header">
    <div className="nav-title">
    <img
    src={logo}
    className="nav-logo"
    alt="Logo"
    onClick={this.scrollToTop}/>
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <Link
      className="active"
      to="inicio"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}>
        Inicio
    </Link>
    <Link
      className="active"
      to="nuestraempresa"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}>
        Nuestra Empresa
    </Link>
    <Link
      className="servicios-link"
      to="servicios"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onMouseEnter={this.showMenu}
      onMouseLeave={this.closeMenu}>Servicios <Arrow className="flecha"/>
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <Link
      className="sub-item"
      to="servicios"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}><p>Procesos contables</p></Link>
                <Link
      className="sub-item"
      to="servicios"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}><p>Proceso de remuneraciones</p></Link>
                <Link
      className="sub-item"
      to="servicios"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}><p>Asesoría laboral</p></Link>
              </div>
            )
            : (
              null
            )
        }
    </Link>
    <Link
      className="active"
      to="contactenos"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}>
        Contacto
    </Link>
  </div>
</div>
</section>
    );
  }
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }
}
