import "./proceso.scss";
import foto from "./form.png";
import Bounce from "react-reveal/Bounce";

function Proceso() {
  return (
    <div className="proceso" id="proceso">
      <div className="center">
        <h1>¿Cómo es el proceso?</h1>
        <div className="container">
          <div className="left">
            <div className="container-1">
              <Bounce left>
                <div className="frases">
                  <h3>
                    Agendá un turno <br /> con nosotros a través de <br />
                    <span>WhatsApp</span>.
                  </h3>
                </div>

                <div className="frases">
                  <h3>
                    Entrevista personalizada <br />
                    en <span>nuestra oficina</span> <br />o por{" "}
                    <span>videollamada</span>.
                  </h3>
                </div>
              </Bounce>
            </div>
            <div className="container-1">
              <Bounce left>
                <div className="frases">
                  <h3>
                    Presentarnos la <span>documentación</span> <br />
                    detallada en la entrevista.
                  </h3>
                </div>
                <div className="frases">
                  <h3>
                    <span> Delega</span> en nosotros <br />
                    los pasos siguientes.
                  </h3>
                </div>
              </Bounce>
            </div>
          </div>
          <Bounce right>
            <img src={foto} alt="foto" />
          </Bounce>
        </div>
      </div>
    </div>
  );
}

export default Proceso;
