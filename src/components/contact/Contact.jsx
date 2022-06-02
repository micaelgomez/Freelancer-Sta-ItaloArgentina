import "./contact.scss";
import email from "./email.png";
import instagram from "./instagram.png";
import tel from "./tel.png";
import ubicacion from "./ubicacion.png";

function contact() {
  return (
    <div className="contact " id="contact">
      <div className="container">
        <div className="title">
          <h2>Contactos</h2>
          <h4>Tenes muchas maneras de encontrarnos</h4>
        </div>

        <div className="body">
          <div className="redes">
            <h3>Redes</h3>

            {/* <img src={whatsapp} alt="whatsapp" /> */}
            <a
              rel="noreferrer"
              href="https://www.instagram.com/sociedaditaloargentina/"
              target="_blank"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mail.google.com/mail/?view=cm&source=mailto&to=societa.italoargentina@gmail.com"
            >
              <img src={email} alt="email" />
            </a>
          </div>
          <div className="redes">
            <h3 className="ubicacion">Ubicacion</h3>
            <img src={ubicacion} alt="ubicacion" />
            <a
              rel="noreferrer"
              href="https://www.google.com/maps/dir/-34.5800678,-58.6344016/societa+italoargentina/@-34.5863904,-58.6434865,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95bcb9c3424c7ec9:0x3966fc755cce1ce1!2m2!1d-58.6364042!2d-34.5928407"
              target="_blank"
            >
              Av. Gdor. Vergara 4106 1° A <br />
              Hurlingham, Provincia de Buenos Aires.{" "}
            </a>
          </div>
          <div className="redes">
            <h3 className="telefono">Oficina</h3>
            <img src={tel} alt="tel" className="tel" />
            <a className="numero" href="#contact" rel="noreferrer">
              4319-7240 <br />
              Lunes - Viernes <br />
              10:00 am 16:00 pm
            </a>
          </div>
        </div>

        <div className="buttom">
          <h4>
            © Sociedad Italo-Argentina | Italia - Roma | Argentina - Buenos
            Aires
          </h4>
        </div>
      </div>
    </div>
  );
}

export default contact;
