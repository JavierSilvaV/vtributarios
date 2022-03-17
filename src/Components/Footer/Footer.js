import React from 'react';
import "./Footer.css";
import logo from "../../Assets/LogoV.png";

function Footer() {
  return (
    <section className="footer">
    <div className="container-footer"></div>
    <footer className="footer-distributed">
    <div className="footer-left">
      <div className="wrapper-logo-f">      <img
    src={logo}
    className="footer-logo"
    alt="Logo"/></div>
  <p className="footer-company-name">V Auditores – Asesoría Contable, Remuneraciones y Financiera</p>
</div>

<div className="footer-center">

  <div>
  </div>

  <div>
  </div>

  <div>
  </div>

</div>

<div className="footer-right">

  <p className="footer-company-about">
    <span></span>
  </p>

  <div className="footer-icons">
  </div>

</div>

</footer>
    </section>
  );
}

export default Footer;