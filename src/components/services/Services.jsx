import "./services.scss";
import telefono from "./telefono.png";

function Services() {
  return (
    <div className="services" id='services'>
      <div className="container">
        <img src={telefono} alt="telefono" className="telefono" />
        <div className="left">
          <h1>Ofrecemos el servicio justo para cada persona.</h1>
          <h3>
            Sabemos que cada consulta es <span>única</span>.<br></br> Por eso,
            nuestros servicios ayudan a evaluar y recomendar{" "}
            <span>la mejor opción</span> para cada tramite que usted requiera.
          </h3>
          <h3>
            Brindándote información en cada tramo del proceso y con la
            posibilidad de involucrarte si lo deseas.
          </h3>
          <div className="button">
            <a href="#carpeta" className="btn">
              Iniciar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
