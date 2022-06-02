import "./team.scss";
import equipo from "./equipo.png";


function Team() {
  return (
    <div className="team" id='team'>
      <div className="container">
    
        <div className="card">
          <h1>¿Quienes Somos?</h1>
          <div className="ceos">
            <h4>Veronica Beros</h4>
            <h6>Directora</h6>
          </div>
          <div className="ceos">
            <h4>German Garmendia</h4>
            <h6>Abogado</h6>
          </div>
          <div className="ceos">
            <h4>Anna Cerquetti</h4>
            <h6>Abogada</h6>
          </div>
        <h3>
          Somos un equipo especializado en tramites consulares, contamos con mas
          de 10 años de experiencia que nos permiten realizarlos de la forma mas
          ágil y eficiente.
        </h3>
        </div>
     
        <img src={equipo} alt="equipo" />
      </div>
    </div>
  );
}

export default Team;
