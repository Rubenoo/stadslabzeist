import { lazy, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../../components/Footer";
import DoeJeMee from "./doejemee";
import DitZijnWijBlock from "./ditzijnwij";
import PersonContainer from "./PersonContainer";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const DitZijnWij = () => {
  const [fullpageIndex, setFullpageIndex] = useState(0);
  return (
    <>
      <Container>
        <ScrollToTop show={fullpageIndex > 0} />
        <ReactFullpage
          licenseKey={import.meta.env.VITE_APP_FULLPAGE_KEY}
          scrollingSpeed={1000}
          scrollOverflow={false}
          // @ts-ignore
          onLeave={(origin, destination) => {
            setFullpageIndex(destination.index);
          }}
          credits={{ enabled: false }}
          render={() => {
            return (
              <div id="fullpage-wrapper">
                <div className="section vh-100">
                  <DitZijnWijBlock />
                </div>
                <div className="section vh-100">
                  <PersonContainer
                    type="left"
                    img="/img/merel_portret.jpeg"
                    name="Merel de Jong"
                    email="merel@stadslabzeist.nl"
                    backgroundsvg="Website-Achtergrond-merel-blauw.svg"
                    info={
                      "Zakelijk leider\n\nMatchmaker / strateeg / social designer \nSuper goed in plannetjes maken, kansen zien, mensen enthousiasmeren, praten en van niets iets maken."
                    }
                  />
                </div>
                <div className="section vh-100">
                  <PersonContainer
                    type="right"
                    img="/img/emma_portret.jpeg"
                    name="Emma Fijma"
                    email="emma@stadslabzeist.nl"
                    backgroundsvg="Website-Achtergrond-emma-blauw.svg"
                    info={
                      "Creatief leider\n\nKunstenaar / grafisch ontwerper / maker \nSuper goed in creatieve denkprocessen, creatieve vertaling van projecten en opdrachten en structuur aanbrengen."
                    }
                  />
                </div>

                <div className="section vh-100">
                  <PersonContainer
                    type="left"
                    img="/img/may_portret.jpeg"
                    name="May van Loenen"
                    email="may@stadslabzeist.nl"
                    backgroundsvg="Website-Achtergrond-rood.svg"
                    info={
                      "Kunstenaar / organisator / verbinder\n\nSuper goed in mensen samen brengen, de queer gemeenschap versterken, dialogen stimuleren, actie voeren en impact creëren."
                    }
                  />
                </div>
                <div className="section vh-100">
                  <PersonContainer
                    type="right"
                    img="/img/xander_portret.jpeg"
                    name="Xander Lenders"
                    email="xander@stadslabzeist.nl"
                    backgroundsvg="Website-Achtergrond-blauw-contact.svg"
                    info={
                      "Programmamaker\n\nKunstenaar / jongerenbegeleider / conceptontwikkelaar\nSuper goed in creatieve concepten ontwikkelen, processen begeleiden, kritisch bevragen, verbinden en luisteren."
                    }
                  />
                </div>
                <div className="section vh-100">
                  <PersonContainer
                    type="left"
                    img="/img/ellen_portret.jpeg"
                    name="Ellen van Roij"
                    email="ellen@stadslabzeist.nl"
                    backgroundsvg="Website-Achtergrond-emma-blauw.svg"
                    info={
                      "Gedragsveranderaar / strateeg / communicatiemaker\n\nGoed in het omzetten van idee naar plan, wil weten wat menselijk gedrag drijft en kan dit omzetten naar positieve, creatieve acties die de wereld een beetje beter maken."
                    }
                  />
                </div>
                <div className="section vh-100">
                  <PersonContainer
                    type="right"
                    img="/img/ollie_portret.jpg"
                    name="Ollie"
                    backgroundsvg="Website-Achtergrond-blauw.svg"
                    email="emma@stadslabzeist.nl"
                    info={
                      "Kantoorhond\n\nKnuffelkont / grappenmaker\nSuper goed in slapen, spelen, puberen, wandelen en lief zijn."
                    }
                  />
                </div>
                <div className="section vh-100">
                  <DoeJeMee />
                </div>
              </div>
            );
          }}
        />
      </Container>
      <Footer show={fullpageIndex === 7} />
    </>
  );
};

export default DitZijnWij;
