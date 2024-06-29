import React from "react";
import "./App.css";
import Header from "./Components/Header";
import imagemApresentacao from "./assets/imagem-apresentacao.png";
import Button from "./Components/Button";
import CardProduto from "./Components/CardProduto";
import cardIcon1 from "./assets/card-icon1.png";
import cardIcon2 from "./assets/card-icon2.png";
import cardIcon3 from "./assets/card-icon3.png";
import cardIcon4 from "./assets/card-icon4.png";
import CardCliente from "./Components/CardCliente";
import cardClienteFoto1 from "./assets/card-cliente-foto1.png";
import cardClienteFoto2 from "./assets/card-cliente-foto2.png";
import cardClienteFoto3 from "./assets/card-cliente-foto3.png";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="apresentacao">
          <div>
            <h1>
              Obtenha mais <span>produtividade</span> no registro de ponto da
              sua empresa.
            </h1>
            <p>
              Mais precisão e segurança através de <br /> tecnologias de
              reconhecimento facial <br /> e geolocalização.
            </p>
            <Button
              backgroundColor="white"
              color="#236742de"
              texto="Entre em Contato"
            />
          </div>
          <img src={imagemApresentacao} alt="" />
        </section>

        <section className="produto" id="produtos">
          <h2 className="produtoTitle">Produto</h2>
          <div className="cardsProduto">
            <CardProduto
              titulo="Reconhecimento Facial"
              icone={cardIcon1}
              texto="Esta tecnologia assegura um  registro de ponto rápido e seguro, garantindo a autenticidade e a precisão das marcações"
            />
            <CardProduto
              titulo="Geolocalização"
              icone={cardIcon2}
              texto="Nosso Sistema Conta com Tecnologia de Geolocalização para um Controle de Ponto Eficiente e Transparente, Assegurando a Verificação Precisa da Localização dos Colaboradores"
            />
            <CardProduto
              titulo="Painel de Administração"
              icone={cardIcon3}
              texto="Painel Administrativo para gestores disponibilizado através de um aplicação web para que possam monitorar todos os dados importantes com facilidade e eficiência"
            />
            <CardProduto
              titulo="Aplicativo Móvel"
              icone={cardIcon4}
              texto="Aplicativo Móvel para que os colaboradores possam fazer o registro de ponto com praticidade e mobilidade, facilitando o controle de horas de qualquer lugar, a qualquer momento"
            />
          </div>

          <button className="botaoOrcamento">Faça seu Orçamento</button>
        </section>

        <section className="clientes" id="casos">
          <h2>O que nossos clientes dizem sobre nós:</h2>
          <span className="clientesCards">
            <CardCliente
              nome="Emanoel Rocha"
              foto={cardClienteFoto1}
              texto="O software de ponto com reconhecimento facial revolucionou nosso controle de ponto. É preciso e seguro, eliminando erros e fraudes. Altamente recomendado!"
            />
            <CardCliente
              nome="Renata Lima"
              foto={cardClienteFoto2}
              texto="Com a geolocalização, o controle de ponto da equipe ques está alocada em outra cidade ficou impecável. Registros precisos e suporte ao cliente excelente!"
            />
            <CardCliente
              nome="Rodrigo Guimarães"
              foto={cardClienteFoto3}
              texto="A produtividade aumentou com PointJob. O reconhecimento facial é eficiente e elimina as filas. Perfeito para as necessidades da minha empresa!"
            />
          </span>
        </section>

        <section className="call">
          <div className="callCard">
            <h3>Pronto Para Alavancar Sua Empresa?</h3>
            <p>
              Clique no botão abaixo e conheça <br /> nossos planos!
            </p>
            <Button
              backgroundColor="white"
              color="#236742de"
              texto="Fale Conosco"
            />
          </div>
        </section>

        <footer>
          <p>Copyright © 2024 - Todos os direitos reservados</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
