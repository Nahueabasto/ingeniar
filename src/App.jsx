import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import './App.css'

function App() {
  return (
    <HashRouter>
     <div className="flex">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
     
      </div>
    </HashRouter>
  );
}

export default App;
