import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Gracias from './pages/Gracias';
import Servicios from './pages/Servicios';
import ClienteDetalle from './pages/ClienteDetalle';
import './App.css'

function App() {
  return (
    <HashRouter>
     <div className="flex">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/clientes" element={<Clientes />} />
        <Route exact path="/gracias" element={<Gracias />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
        <Route exact path="/servicios" element={<Servicios />} />
        <Route exact path="/serviciosdetalle/:id" element={<ClienteDetalle />} />

      </Routes>
     
      </div>
    </HashRouter>
  );
}

export default App;
