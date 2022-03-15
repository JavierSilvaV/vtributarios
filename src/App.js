import './App.css';
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import Inicio from './Components/Inicio/Inicio';
import Navbar from "./Components/Navbar/Navbar";
import NuestraEmpresa from './Components/NuestraEmpresa/NuestraEmpresa';
import Servicios from './Components/Servicios/Servicios';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <NuestraEmpresa />
      <Servicios />
      <Contacto />
      <Footer />

      <a
        href="https://wa.me/+56972172916"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
      <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;
