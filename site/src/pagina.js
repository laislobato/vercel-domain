// Pag.js
import foto from "./img/tt.png";
import './App.css';
import { Link } from 'react-router-dom';

function Pag() {
  return (
    <div className="newspaper" style={{ minHeight: 'auto', paddingBottom: '80px' }}>
      
      <header className="masthead">
        <h1 className="newspaper-title">Trevo Team</h1>
        
        <Link 
          to="/" 
          style={{ 
            color: 'black', 
            fontSize: '1.35rem', 
            margin: '10px 0 20px',
            display: 'inline-block'
          }}
        >
          ← Voltar para o Jornal Joaninha
        </Link>

        <div className="banner">
          <p>Créditos do Projeto</p>
        </div>
      </header>

      <div className="main-content" style={{ marginTop: '30px' }}>
        {/* Coluna grande */}
        <div className="column large">
          <div className="featured-headline">
            <h2 className="main-headline" style={{ textAlign: 'center' }}>
              Criadores do Site
            </h2>

            <div className="headline-content">
              <div className="headline-image">
                <img 
                  src={foto}
                  alt="Trevo Team" 
                  className="news-photo medium"
                />
              </div>

              <div className="headline-text">
                <p className="byline" style={{ fontSize: '1.3rem', textAlign: 'center' }}> por Vitor M., Lais L. e Rafael B..
                </p>
                
                <p className="lead" style={{ fontSize: '1.3rem' }}>
                  
                </p>

                <p style={{ fontSize: '1.3rem' }}>
                  Baseado no universo do nosso jogo do TCC, o Jornal Joaninha se passa em 1962, 
                  alguns dias após a explosão da Terceira Guerra Mundial, logo após a Crise dos Mísseis de Cuba.
                </p>

                <p style={{ fontSize: '1.3rem' }}>
                  O Jornal Joaninha é a única fonte de informações na região onde o jogo irá se passar, 
                  além de poder ser encontrado na demo do próprio jogo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pag;