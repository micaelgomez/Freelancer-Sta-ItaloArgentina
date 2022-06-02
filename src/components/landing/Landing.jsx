import "./landing.scss";
import compu from "./compu.png";
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';

function Landing() {
  return (
    <div className="landing" id="landing">
      <div className="title">
      <Rotate top left>
        <h1>La manera mas fácil de realizar tu ciudadanía</h1>
        <div className="subtitle">
          <h4>
            Como profesionales del área consular conocemos la dificultad de
            realizar tramites <br /> por eso creamos el camino más sencillo
            hacia él.
          </h4>
        </div>
        </Rotate>
      </div>

      <div className="computadora">
      <Slide right>
        <img src={compu} alt="Computadora" />
        </Slide>
      </div>
    </div>
  );
}

export default Landing;
