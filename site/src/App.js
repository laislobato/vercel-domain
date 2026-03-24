// App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';        // ← vamos criar esse arquivo
import Pag from './pagina';       // seu arquivo pagina.js (renomeie a função para Pag se quiser)

function App() {
  return (
    <Routes>
      {/* Layout principal com navegação */}
      <Route path="/" element={<Layout />}>
        {/* Página inicial (Home) */}
        <Route index element={<Home />} />

        {/* Outra página */}
        <Route path="pagina" element={<Pag />} />
      </Route>
    </Routes>
  );
}

export default App;