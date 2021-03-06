import "./app.scss";
import Carpetas from "./components/carpetas/Carpetas";
import Landing from "./components/landing/Landing";
import Proceso from "./components/proceso/Proceso";
import Services from "./components/services/Services";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Slide from "react-reveal/Slide";

function App() {
  return (
    <div className="app">
      <div className=" container-wsp">
        <a href="https://wa.me/5491139389905" rel="noreferrer" target="_blank">
          <WhatsAppIcon className="icon" />
        </a>
      </div>

      <Landing />
      <Team />

      <Slide left>
        <Services />
      </Slide>

      <Proceso />
      <Carpetas />
      <Contact />
    </div>
  );
}

export default App;
