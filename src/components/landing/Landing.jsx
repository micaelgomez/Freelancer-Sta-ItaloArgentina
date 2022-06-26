import "./landing.scss";
import compu from "./compu.png";
import logo from "./logo.svg";
import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";

function Landing() {
  const onTop = () => {
    console.log("click");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="navBar">
        <img src={logo} alt="Logo" className="logo" onClick={() => onTop()} />
        <div className="list">
          <a href="/#" onClick={() => onTop()}>
            Inicio
          </a>
          <a href="/#team" className="list-title">
            Equipo
          </a>
          <a href="/#services" className="list-title">
            Servicios
          </a>
          <a href="/#contact" className="list-title">
            Contacto
          </a>
        </div>
      </div>
      <div className="landing" id="landing">
        <div className="title">
          <h1>La manera mas fácil de realizar tu ciudadanía</h1>
          <Rotate top left>
            <div className="subtitle">
              <h4>
                Como profesionales del área consular conocemos la dificultad de
                realizar tramites <br /> por eso creamos el camino más sencillo
                hacia él.
              </h4>
            </div>
          </Rotate>
        </div>

        <Slide right>
          <div className="computadora">
            <img src={compu} alt="Computadora" />
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Landing;
