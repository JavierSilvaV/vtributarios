import React from "react";
import "./Contacto.css";
import Phone from '@mui/icons-material/PhoneInTalk';
import Email from '@mui/icons-material/Email';
import Location from '@mui/icons-material/LocationOn';
import  Instagram  from '@material-ui/icons/Instagram';

function Contacto() {
    return (
        <section className="contactenos">
        <div className="bg-image"></div>
        <div className="wrapper-contacto">
        <h1 className="contactenos-titutlo">Contáctenos</h1>
        <div>
        <div className="informacion">
            <div className="icon-informacion">
                <Phone className="telefono"></Phone>
                <h1>Llámanos</h1>
                <p>(+56 9) 7217 2916</p>
            </div>
            <div  className="icon-informacion">
                <a href="mailto:c.alvarez@vtributaria.cl"><Email className="email-icon"/></a>
                <h1>Escríbenos</h1>
                <a href="mailto:c.alvarez@vtributaria.cl">c.alvarez@vtributaria.cl</a>
            </div>
            <div  className="icon-informacion">
                <Location className="ubicacion"></Location>
                <h1>Visítanos</h1>
                <p>Avenida 2 Sur 870, oficina 818</p>
                <p>Talca – Región del Maule</p>
                <p>Chile</p>
            </div>
            <div  className="icon-informacion">
                
                <a href="https://www.instagram.com/vtributaria_cl/" target="_blank" rel="noopener noreferrer"><Instagram className="instagram"/> </a>

                <h1>@vtributaria_cl</h1>
                <p>Haz click en el ícono para ir</p>
                <p> a nuestra página de Instagram</p>               

            </div>
        </div>
        </div>
        </div>
    </section>

)
}

export default Contacto