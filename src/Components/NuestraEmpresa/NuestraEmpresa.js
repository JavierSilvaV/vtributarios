import React from 'react';
import "./NuestraEmpresa.css";
import fondo from "../../Assets/Fondo_NuestraEmpresa.jpeg";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function NuestraEmpresa() {
  return (
    <section className="nuestraempresa">
    <div className="texto">
        <div className="fondo-nuestraempresa">
          <img className="imagen-fondo" src={fondo} alt="img"></img>
          <h1 className="titulo">Nuestra Empresa</h1>
          <p className="parrafo-fondo">Nuestra empresa se caracteriza por su compromiso y relación de confianza con sus clientes. Para nosotros lo principal es el éxito de su negocio. </p>
        </div>
        <div className="texto-principal">
          <p className="parrafo">En la práctica cotidiana de tú empresa o negocio es sumamente importante tener un control eficiente, que te permita, por una parte, analizar y revisar las operaciones contables, y por otra, dar la confianza necesaria a los procesos de la empresa y a tus clientes, así como a la lógica de crecimiento y calidad.</p>
          <div className="container-texto">
            <div className="wrapper">
              <div>
                <h2 className="sub-titulo">MISIÓN</h2>
                <p className="parrafo-2">Entregar a lo/as emprendedores,  pymes, pequeñas y medianas empresas un apoyo permanente orientado a la  gestión financiera y el cumplimiento contable, laboral y tributario.</p>
                <div className="container-check">
                  <CheckCircleOutlinedIcon style={{fontSize: 80}} className="checkmark"/>
                </div>
                </div>
              <div>
                <h2 className="sub-titulo">VISIÓN</h2>
                <p className="parrafo-2">Ser garantes de un servicio profesional y de confianza que nos permita transitar hacia el éxito en conjunto.</p>
                <div className="container-check">
                  <CheckCircleOutlinedIcon style={{fontSize: 80}} className="checkmark"/>
                </div>
                </div>
              <div>
                <h2 className="sub-titulo-xl">VALORES ORGANIZACIONALES</h2>
                <p className="parrafo-2">Ética, profesionalismo y confidencialidad, mediante la exigencia de los más altos estándares de calidad.</p>
                <div className="container-check">
                  <CheckCircleOutlinedIcon style={{fontSize: 80}} className="checkmark"/>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
    </section>
  )
}

export default NuestraEmpresa