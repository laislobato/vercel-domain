import './App.css';
import foto from "./img/01.png";
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className="newspaper">
      <header className="masthead">
        <div className="edition">EDIÇÃO DE ULTIMA HORA - 20 de Outubro de 1962</div>
        <h1 className="newspaper-title">JORNAL WW3362</h1>
        <div className="subtitle">Notícias do mundo e de nossa querida região de Joaninha</div>

        <div className="banner">
          <p>Últimas notícias</p>
          <p className="banner-small">A PAZ FOI DECLARADA APOS NÓS PAGARMOS O PREÇO</p>
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
                <p className="byline">Pelo repórter Vitor - 19/10/1962</p>
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
            <h3>Manchetes fúteis ofuscam debate sobre transporte marítimo</h3>
            <p className="byline">Pelo reporter Rafael - 17/10/1962</p>
            <p>
              Nos últimos meses, parte da mídia tem dado destaque ao preço de cruzeiros turísticos e às “promoções” de viagens em navios de lazer. Reportagens detalham valores de cabines e experiências de luxo, mas ignoram discussões mais relevantes sobre o transporte marítimo.<br/>

              Enquanto isso, especialistas apontam problemas estruturais no setor, como a redução de rotas regulares para passageiros e o encarecimento do transporte. Em alguns casos, viajantes acabam recorrendo a navios de carga como alternativa, diante do alto custo e da falta de opções acessíveis.

              Críticos afirmam que a cobertura jornalística revela uma inversão de prioridades: temas superficiais recebem destaque, enquanto questões ligadas ao acesso ao transporte e ao funcionamento do sistema marítimo permanecem à margem do debate público.
            </p>
            <img 
              src={foto}
              alt=''
              className="news-photo medium"
            />
            <p className="caption">resumo da imagem - data</p>
          </div>
        </div>

        {/* Coluna pequena: notícias rápidas */}
        <div className="column small">
          <h2>Atualizações Locais</h2>
          
          <div className="small-news">
            <h5>Návios hiperlotados.</h5>
            <p>Por conta das últimas nukes, a demanda de návios e transportes pra sair da zona de risco dispararam! Preço sobe cerca de 500% comparado com antes da guerra..</p>
          </div>
          
          <div className="small-news">
            <h5>Hospital local é abandonado</h5>
            <p>O hospital nostradames, o mais proximo em cerca de 30km é abandonado com toda a sua equipe médica abandonando a região para uma zona segura na América do Sul. Os poucos que ficaram foram para o abrigo do centro.</p>
          </div>

          <div className="small-news">
            <h5>Inverno Radioativo, o que é?</h5>
            <p>Sed do eiusmod tempor...</p>
          </div>

          <hr className="divider" />

          <h4>Anúncios de Emprego</h4>
          <p className="ad">
            <b>Entregador</b> <br/>
            Entregar nossos jornais para região de joaninha! <br/>
            <hr className="red"/>
            200 S$/h <br/>
          </p>
          <p className="ad">
            <b>ENFERMEIRO</b> <br/>
            Procura-se URGENTEMENTE qualquer agente de saúde para ajudar com a hiperlotação no abrigo do centro<br/>
            <hr className="red"/>
            O salário será entregue após os suprimentos do norte forem entregues <br/>
          </p>
          <p className="ad">
            Profissão <br/>
            Descrição <br/>
            <hr className="red"/>
            Salário <br/>
          </p>
        </div>
      </div>

      {/* Conteúdo extra abaixo das colunas, full width */}
      <div className="below-fold">
        <hr className="divider thick" />
        <h2 className="AG">Atualizações Globais</h2>
        {/* Pode adicionar mais seções aqui depois */}

        {/* Coluna grande: manchete principal (ocupa ~2/3) */}
        <div className="column large">
          <div className="featured-headline">
            <h2 className="main-AG">Russia e EUA declaram paz após destruir o mundo.</h2>

            <div className="headline-content">
              <div className="headline-image">
                <img 
                  src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nuclear-weapons-514866568.jpg?w=1600" 
                  alt="............." 
                  className="featured-photo"
                />
                <p className="caption">resumo da imagem - data</p>
              </div>

              <div className="headline-text">
                <p className="byline">Pelo repórter Tico - 19/10/1962</p>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>Proibida a reprodução sem permissão.</p>
      </footer>
      <SpeedInsights />
    </div>
  );
}

export default App;