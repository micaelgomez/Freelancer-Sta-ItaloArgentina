import "./navbar.scss";
import logo from "./logo.svg";

function Navbar() {
  const onTop = () => {
    console.log("click");
    window.scrollTo(0, 0);
  };

  return (
    <div className="navBar">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" onClick={() => onTop()} />
        <ul className="list">
          <a onClick={() => onTop()}>Inicio</a>
          <a href="#team">Quienes somos</a>
          <a href="#services">Servicios</a>
          <a href="#contact">Contacto</a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
