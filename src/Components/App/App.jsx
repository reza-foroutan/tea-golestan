import Footer from "../Footer/Footer";
import GolestanImagBg from "../GolestanImagBg/GolestanImagBg";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";
import Lottery from "../Lottery/Lottery";
import Mag from "../Mag/Mag";
import Pistachio from "../Pistachio/Pistachio";
import Rice from "../Rice/Rice";
import SocialResponsibility from "../SocialResponsibility/SocialResponsibility";
import Tea from "../Tea/Tea";
import Widget from "../Widget/Widget";
import "./app.css";
import "./fontiran.css";
import "./settings.css";
function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <section>
        <Lottery />
      </section>
      <div className="divider-border"></div>
      <section>
        <Introduction />
      </section>
      <section>
        <Widget />
      </section>
      <section>
        <Rice />
      </section>
      <section>
        <Tea />
      </section>
      <section>
        <Pistachio />
      </section>
      <section>
        <GolestanImagBg />
      </section>
      <div>
        <Mag />
      </div>
      <SocialResponsibility />
      <Footer />
    </>
  );
}

export default App;
