import React, { useState } from "react";
import "./Servicios.css";
import { Link } from "react-scroll";
import Calculate from '@mui/icons-material/CalculateOutlined';
import Work from '@mui/icons-material/Work';
import Account from '@mui/icons-material/AccountBalanceWallet';

function Servicios() {
  function handleSubmit(e) {
    e.preventDefault();
    setMostrarPC(true);
  }

  function handleSubmit2(e) {
    e.preventDefault();
    setMostrarPR(true);
  }

  const [mostrarPC, setMostrarPC]=useState(false)
  const [mostrarPR, setMostrarPR]=useState(false)
  const [mostrarAL, setMostrarAL]=useState(false)

  return (
    <section className="servicios">
      <h1 className="titulo-servicios">Nuestros Servicios</h1>
      <div className="wrapper-servicios">
        <div>
      <div className="icon-servicios">  
          <Link
      className="active"
      to="placeholder-pc"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}>      
      <Calculate className="calculadora"
        onClick={handleSubmit}/>
    </Link>
    <h1 className="titulo-s">Procesos Contables</h1>
    </div>
    </div>
          <div className="div-boton">
          <div className="icon-servicios">
          <Link
      className="active"
      to="placeholder-pr"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}>
          <Account className="cuenta"
          onClick={handleSubmit2}></Account>
            
            
    </Link>
    </div>
    <h1 className="titulo-s">Procesos de Remuneraciones</h1>
          </div>
          <div className="div-boton">
          <div className="icon-servicios">
          <Link
      className="active"
      to="placeholder-al"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}>
            <Work className="work"
            onClick={()=>setMostrarAL(true)} />
    </Link>
    </div>
    <h1 className="titulo-s">Asesoría Laboral</h1>
          </div>
        </div>
        <div className="placeholder-pc"></div>
        {
          mostrarPC?
        <div className="procesos-contables">
        <h2 className="titulo-contables">Procesos Contables</h2>
        <p className="parrafo-contables">La asesoría contable en base a la externalización u outsourcing de servicios permite a las empresas concentrarse en sus negocios, delegando en un tercero la realización de procesos administrativos especializados quien además se transforma en una contraparte del personal administrativo que agrega gran valor a la gestión del negocio.</p>
        <p className="parrafo-contables">Servicios contables es adecuado para todo tipo de empresas, indistinto del tamaño, nuestro equipo de expertos que realiza todos los procesos contables mensuales y anuales para su empresa: </p>
        </div>
                :null
        }
        <div className="placeholder-pr"></div>
                {
          mostrarPR?
        <div className="procesos-remuneraciones">
        <h2 className="titulo-remuneraciones">Procesos de remuneraciones</h2>
        <p className="parrafo-remuneraciones">Nuestro servicio  establece actividades relativas al cálculo de remuneraciones, así como la elaboración de los documentos necesarios que acrediten el cumplimiento de la normativa laboral desde su inicio hasta el término de la relación laboral, otorgando al empleador la seguridad y respaldo suficiente ante cualquier inconveniente </p>
        <p className="parrafo-remuneraciones">Nos encargamos de la coordinación del proceso de remuneraciones e imposiciones y todos los demás temas laborales contenidos en la siguiente lista: </p>
        </div>
        :null
        }
        <div className="placeholder-al"></div>
        {
          mostrarAL?
        <div className="asesoria-laboral">
        <h2 className="titulo-asesoria">Asesoría laboral </h2>
        <p className="parrafo-asesoria">Prestamos asesoría permanente a empresas en sus procesos de contratación y desvinculación</p>
        <p className="parrafo-asesoria">Servicios contables es adecuado para todo tipo de empresas, indistinto del tamaño, nuestro equipo de expertos que realiza todos los procesos contables mensuales y anuales para su empresa: </p>
        <ul>
        <li>Construcción de contrato de trabajo</li>
        <li>Anexo de  contrato de trabajo</li>
        <li>Finiquitos</li>
        </ul>
        </div>
        :null
        }
    </section>

  )
}

export default Servicios