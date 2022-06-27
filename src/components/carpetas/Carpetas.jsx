import "./carpetas.scss";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import FolderIcon from "@mui/icons-material/Folder";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Flip from "react-reveal/Flip";
import Swing from "react-reveal/Swing";

function Carpetas() {
  return (
    <div className="carpeta" id ="carpeta">
      <div className="container">
        <div className="container-top">
          <Flip right>
            <div className="box">
              <PostAddIcon className="logo" />
              <h3>1. TURNO </h3>
              <h5>Agenda un turno con nosotros a traves de WhatsApp</h5>
            </div>
          </Flip>
          <Flip right>
            <div className="box">
              <AccountBoxIcon className="logo" />
              <h3>2. ENTREVISTA</h3>
              <h5>
                Entrevista personalizada en nuestra oficina o por videollamada.
                Al finalizar la entrevista se le hará saber los requisitos y su
                cotización.
              </h5>
            </div>
          </Flip>
          <Flip right>
            <div className="box">
              <FolderIcon className="logo" />
              <h3>3. INICIO CARPETA</h3>
              <h5>
                Luego de haber reunido la documentación necesaria, se da inicio
                a la carpeta.
              </h5>
            </div>
          </Flip>
          <Flip right>
            <div className="box">
              <BookmarkAddedIcon className="logo" />

              <h3>4. CIUDADANIA</h3>
              <h5>Del resto nos ocupamos nosotros.</h5>
            </div>
          </Flip>
        </div>

        <div className="container-bottom">
          <Swing>
            <h4>+ 250 Carpetas finalizadas</h4>
          </Swing>
        </div>
      </div>
    </div>
  );
}

export default Carpetas;
