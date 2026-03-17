import './App.css';
import foto from "./img/01.png";

function App() {
  return (
    <div className="newspaper">
      <header className="masthead">
        <div className="edition">EDIÇÃO DE ULTIMA HORA - 2 de Novembro de 1962</div>
        <h1 className="newspaper-title">JORNAL Joaninha</h1>
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
            <h2 className="main-headline">Russia e EUA declaram paz após destruir o mundo.</h2>

            <div className="headline-content">
              <div className="headline-image">
                <img 
                  src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nuclear-weapons-514866568.jpg?w=1600" 
                  alt="............." 
                  className="featured-photo"
                />
                <p className="caption">Nesta imagem, tropas da 11ª divisão aerotransportada assistem a uma explosão atômica a curta distância no deserto de Las Vegas, em 1 de novembro de 1951. - Foto de Bettmann, Getty</p>
              </div>

              <div className="headline-text">
                <p className="byline">Pelo repórter <b>Vitor Martins</b> - 29/10/1962</p>
                <p className="lead">
                  Depois de 6 dias de guerra, os Estados Unidos da Ámerica e a União das Repúblicas Socialistas Soviéticas finalmente assinaram o trato de paz depois de mais de 50% das regiões dos países envolvidos terem se tornado completamente inabitaveis por conta da radiação e das Nukes.
                </p>
                <p>
                  Nesse exato momento a maioria das pessoas influêntes da região estão saindo de seus países para os menos atingidos em busca de um local "habitavel", enquanto nós ficamos para trás.
                </p>
              </div>
            </div>
          </div>

          {/* Manchete pequena logo abaixo, dentro da mesma coluna */}
          <div className="secondary-news">
            <hr className="divider thick" />
            <h3>Manchetes fúteis ofuscam debate sobre transporte marítimo</h3>
            <p className="byline">Pelo repórter e cartunista <b>Rafael Bastos</b> - 31/10/1962</p>
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
            <p className="caption">A charge mostra dois jornalistas reportando uma criança com um pequeno jogo de cartas enquanto prédio atrás estão pegando fogo - Charge por <b>Rafael Bastos</b></p>
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
            <p>É o resultado de uma guerra nuclear em larga escala. As enormes quantidades de fumaça e poeira lançadas na atmosfera após múltiplas detonações nucleares criam um efeito "antiestufa", resfriando a Terra a temperaturas abaixo de zero e levando a uma escuridão prolongada.</p>
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
            <b>Capitão, Piloteiro ou qualquer pessoa que saiab pilotar um Barco</b> <br/>
            Pilotar um barco de porte médio para Africa com cerca de 190 passageiros <br/>
            <hr className="red"/>
            O salário será negociado com os passsageiros dependendo da quantidade que cada um tem <br/>
          </p>
        </div>
      </div>

      {/* Conteúdo extra abaixo das colunas, full width */}
      <div className="below-fold">
        <hr className="divider thick" />
        {/* <h2 className="AG">Atualizações Globais</h2> */}

        {/* Coluna grande: manchete principal (ocupa ~2/3) */}
        {/* <div className="column large">
          <div className="featured-headline">
            <h2 className="main-AG">Russia e EUA declaram paz após destruir o mundo.</h2>

            <div className="headline-content">
              <div className="headline-image">
                <img 
                  src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nuclear-weapons-514866568.jpg?w=1600" 
                  alt="............." 
                  className="featured-photo"
                />
                <p className="caption">resumo da imagem </p>
              </div>

              <div className="headline-text">
                <p className="byline">Pelo repórter Tico - 02/11/1962</p>
                <p className="lead">
                  lorem ipson
                </p>
                <p>
                  aaaaaaaaaaaaaaaaaa 
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <footer className="footer">
        <p>Proibida a reprodução sem permissão.</p>
      </footer>
    </div>
  );
}

export default App;