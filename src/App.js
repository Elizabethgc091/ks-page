import "./App.css";
import ks from "./source/ks.png";
import imageks from "./source/imageks.jpg";
import aboutImg from "./source/aboutImg.jpg";
import taza from "./source/taza.png";
import Services from "./services/Services.js";
function App() {
  return (
    <div className="App">
      <header className="header">
        <img id="logo-ks" src={ks} alt="logo ks" />
        <nav className="navbar">
          <ul className="list-nav">
            <div className="list">
              <li>Inicio</li>
              <li>Nosotros</li>
              <li>Servicios</li>
              <li>Cotacto</li>
            </div>
          </ul>
        </nav>
        <div className="phone-contact">55-55-55-55-55</div>
      </header>
      <main className="container-main">
        <img id="img-bussines" src={imageks} alt="imagen negocios" />
        <p id="text-position1">Agencia Consultora</p>
        <p id="text-position2">Servicios Electrónicos</p>
        <p id="text-position3">Contables - Fiscales - Nóminas</p>
        <div className="about-us">
          <div className="about-img">
            <img id="about-img" src={aboutImg} alt="imagen acerca de" />
          </div>
          <div className="about-text">
            <p>Sobre Nosotros</p>
            <div className="text-one">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              doloribus officiis, architecto, obcaecati eligendi neque
              asperiores voluptatem ipsa hic modi aliquid nihil debitis? Magnam,
              perspiciatis? Beatae corrupti cumque deserunt blanditiis.
            </div>
          </div>
        </div>
        <div className="services">
          <p>Nuestros servicios</p>
          <div className="container-services">
            <Services image={taza} text={"lorem"} />
            <Services image={taza} text={"lorem"} />
            <Services image={taza} text={"lorem"} />
            <Services image={taza} text={"lorem"} />
          </div>
        </div>
      </main>
      <footer className="container-footer">footer</footer>
    </div>
  );
}

export default App;
