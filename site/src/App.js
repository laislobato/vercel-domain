import './App.css';

function App() {
  return (
    <div className="newspaper">
      <header className="masthead">
        <div className="edition">Edição Especial - 20 de Outubro de 1962</div>
        <h1 className="newspaper-title">JORNAL ALGUMA COISA</h1>
        <div className="subtitle">Notícias pós crianças com poder nuclear decidirem brincar de Deus :D</div>

        <div className="banner">
          <p>EDIÇÃO ESPECIAL – bla bla bla–bla bla bla–</p>
          <p className="banner-small">Morte aos soviéticos!!!!!</p>
        </div>
      </header>

      <div className="banner-image">
        <img 
          src="https://aventurasnahistoria.com.br/wp-content/uploads/curiosidades/operation_crossroads_baker_wide.jpg" 
          alt="............." 
          className="full-banner"
        />
      </div>

      <div className="main-content">
        {/* Coluna grande: manchete principal (ocupa ~2/3) */}
        <div className="column large">
          <div className="featured-headline">
            <h2 className="main-headline">NOTICIA ULTRA MEGA IMPORTANTE!</h2>

            <div className="headline-content">
              <div className="headline-image">
                <img 
                  src="https://www.forte.jor.br/wp-content/uploads/2024/10/60-anos-do-primeiro-teste-nuclear-da-China-4.jpeg" 
                  alt="............." 
                  className="featured-photo"
                />
                <p className="caption">resumo da imagem - data</p>
              </div>

              <div className="headline-text">
                <p className="byline">Pelo reporter Rafael - 19/10/1962</p>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>
          </div>

          {/* Manchete pequena logo abaixo, dentro da mesma coluna */}
          <div className="secondary-news">
            <hr className="divider thick" />
            <h3>Mais uma manchete pequena</h3>
            <p className="byline">Pelo reporter Vitor - 17/10/1962</p>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            </p>
            <img 
              src="https://www.gov.br/cnen/pt-br/avulsos/ipen-sala-controle-1976-jpg" 
              alt=".........." 
              className="news-photo medium"
            />
            <p className="caption">resumo da imagem - data</p>
          </div>
        </div>

        {/* Coluna pequena: notícias rápidas */}
        <div className="column small">
          <h3>Notícias Rápidas</h3>
          
          <div className="small-news">
            <h5>Gato faz coisa fofa</h5>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          
          <div className="small-news">
            <h5>Preço da gasolina explode</h5>
            <p>Consectetur adipiscing elit...</p>
          </div>

          <div className="small-news">
            <h5>Clima: vai chover ou não?</h5>
            <p>Sed do eiusmod tempor...</p>
          </div>

          <hr className="divider" />

          <h4>Anuncios de Emprego</h4>
          <p className="ad">padeiro</p>
          <p className="ad">padeiro</p>
          <p className="ad">padeiro</p>
          <p className="ad">padeiro</p>
        </div>
      </div>

      {/* Conteúdo extra abaixo das colunas, full width */}
      <div className="below-fold">
        <hr className="divider thick" />
        <h3>Continuação / Outras Notícias</h3>
        <p>
          Se tiver mais alguma ideia de manchete só adicionar aqui
        </p>
        {/* Pode adicionar mais seções aqui depois */}
      </div>

      <footer className="footer">
        <p>Proibida a reprodução sem permissão.</p>
      </footer>
    </div>
  );
}

export default App;