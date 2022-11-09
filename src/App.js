import "./App.css";
import ks from "./source/ks.png";
import imageks from "./source/imageks.jpg";

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
      </main>
      <footer className="container-footer">footer</footer>
    </div>
  );
}

export default App;
