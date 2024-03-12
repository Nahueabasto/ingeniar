import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import './App.css'

function App() {
  return (
    <BrowserRouter>
     <div className="flex">
      <Routes>
        <Route exact path="/contacto" element={<Home />} />
        <Route exact path="/" element={<Contacto />} />
      </Routes>
     
      </div>
    </BrowserRouter>
  );
}

export default App;
