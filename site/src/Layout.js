// Layout.js
import './App.css';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="newspaper" style={{ minHeight: 'auto', paddingBottom: '60px' }}>
      <header className="masthead">
        <div className="edition">EDIÇÃO DE ÚLTIMA HORA - 2 de Novembro de 1962</div>
        <h1 className="newspaper-title">JORNAL Joaninha</h1>
        
        {/* Links de navegação */}
        <nav style={{ margin: '15px 0' }}>
          <Link to="/" style={{ marginRight: '20px', color: 'black', fontSize: '1.1rem' }}>
            Home
          </Link>
          <Link to="/pagina" style={{ color: 'black', fontSize: '1.1rem' }}>
            Trevo Team
          </Link>
        </nav>

        <div className="subtitle">Notícias do mundo e de nossa querida região de Joaninha</div>

        <div className="banner">
          <p>Últimas notícias</p>
          <p className="banner-small">A PAZ FOI DECLARADA APOS NÓS PAGARMOS O PREÇO</p>
        </div>
      </header>

      <div className="banner-image">
        <img 
          src="https://aventurasnahistoria.com.br/wp-content/uploads/curiosidades/operation_crossroads_baker_wide.jpg" 
          alt="Banner" 
          className="full-banner"
        />
      </div>

      {/* Aqui entra o conteúdo específico de cada página */}
      <Outlet />

      <footer className="footer">
        <p>Proibida a reprodução sem permissão.</p>
      </footer>
    </div>
  );
}

export default Layout;