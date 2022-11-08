import "./App.css";
import ks from "./source/ks.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img id="logo-ks" src={ks} alt="logo ks" />
        <nav className="navbar">
          <ul className="list-nav">
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Servicios</li>
            <li>Cotacto</li>
          </ul>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
