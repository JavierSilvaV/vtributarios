import React from 'react';
import "./Inicio.css";
import calculadora from "../../Assets/Calculadora.jpeg";

function Inicio() {
    return (
    <section className="inicio">
        <h1 className="titulo-inicio">Asesoría Contable, remuneraciones y Financiera</h1>
        <div className="container-inicio">
            <div className="container-imagen">
                <img className="imagen-inicio" src={calculadora} alt="img"/>
            </div>
            <div className="container-parrafo">
                <p className="parrafo-inicio">Nuestro foco, es atender y resolver las distintas necesidades de nuestros emprendedores regionales, además de las pequeñas y medianas empresas, en los distintos ámbitos que la operación y el plan de negocios que requiera.</p>
            </div>
        </div>
    </section>
)
}

export default Inicio