import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contacto.css";
import Phone from '@mui/icons-material/PhoneInTalk';
import Email from '@mui/icons-material/Email';
import Location from '@mui/icons-material/LocationOn';

function Contacto() {
    const recaptchaRef = useRef(null);

    const [status, setStatus] = useState("Enviar");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(recaptchaRef.current.getValue()){
            setStatus("Enviando...");
            const { name, nro, email, message } = e.target.elements;
            let details = {
                name: name.value,
                nro: nro.value,
                email: email.value,
                message: message.value,
            };
            let response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            body: JSON.stringify(details),
    });
    
        setStatus("Enviar");
        let result = await response.json();
        alert(result.status);
        } else {
            alert('Verifique que no es un robot');
        }
};
    return (
        <section className="contactenos">
        <div className="bg-image"></div>
        <form onSubmit={handleSubmit}>
        <h1 className="contactenos-titutlo">Contáctenos</h1>
        <div className="wrapper-contacto">
        <div className="formulario">
            <div className="nombre">
                <label htmlFor="name"></label>
                <input type="text" id="name" required placeholder="Nombre Apellido"/>
            </div>
            <div className="nro">
                <label htmlFor="nro"></label>
                <input type="text" id="nro" required maxLength={9} placeholder="Télefono"
                minLength={9}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();}}}/>
            </div>
            <div className="email">
                <label htmlFor="email"></label>
                <input type="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="ejemplo@email.cl"></input>
            </div>
            <div className="mensaje">
                <label htmlFor="message"></label>
                <textarea id="message" required placeholder="Mensaje"/>
            </div>
            <ReCAPTCHA
            className="recaptcha"
            ref={recaptchaRef}
            sitekey={"6LeysVoeAAAAAJXlm6Zsp8NihNMKNqzRbzIKLXrO"}/>
            <button type="submit" className="boton">{status}</button>
        </div>
        <div className="informacion">
            <div className="icon-informacion">
            <Phone className="telefono"></Phone>
            </div>
            <h1>Llámanos</h1>
            <p>(+56 2) 2934 7107</p>
            <p>(+56 9) 9842 5866</p>
            <div  className="icon-informacion">
            <Email className="email-icon"></Email>
            </div>
            <h1>Escríbenos</h1>
            <p>contacto@vtriburaria.cl</p>
            <div  className="icon-informacion">
            <Location className="ubicacion"></Location>
            </div>
            <h1>Visítanos</h1>
            <p>Avenida 2 Sur 870, oficina 818</p>
            <p>Talca – Región del Maule</p>
            <p>Chile</p>
        </div>
        </div>
        </form>
    </section>

)
}

export default Contacto