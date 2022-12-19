import { lazy, useState } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from "../../components/Footer";
import DoeJeMee from "./doejemee";
import DitZijnWijBlock from "./ditzijnwij";
import PersonContainer from "./PersonContainer";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const DitZijnWij = () => {
  const [fullpageIndex, setFullpageIndex] = useState(0);
  return (
    <Container>
      <ScrollToTop show={fullpageIndex > 0}/>
      <ReactFullpage   
          licenseKey={'8N0K9-BXM78-CKADI-YNQJ9-VEXHK'}
          scrollingSpeed = {1000}
          scrollOverflow={false}
          onLeave={(origin, destination, direction) => {
            setFullpageIndex(destination.index);
          }}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section vh-100">
                  <DitZijnWijBlock/>
                </div>                   
                <div className="section vh-100">
                  <PersonContainer 
                    type="left" 
                    img="/img/merel_portret.png" 
                    name="Merel de Jong" 
                    email="merel@stadslabzeist.nl"
                    backgroundSVG="Website-Achtergrond-merel-blauw.svg"
                    info={"Zakelijk leider\n\nMatchmaker / strateeg / social designer \nSuper goed in plannetjes maken, kansen zien, mensen enthousiasmeren, praten en van niets iets maken."}
                    />
                </div>                
                <div className="section vh-100">
                  <PersonContainer 
                    type="left" 
                    img="/img/marloes_portret.png" 
                    name="Marloes van Haaren" 
                    backgroundSVG="Website-Achtergrond-marloes-roze.svg"
                    email="marloes@stadslabzeist.nl" 
                    info={"Projectmanager\n\nCoach / maker / structuurdokter \nSuper goed in de juiste vragen stellen, rust creëren, bergen werk verzetten, plannen en creatief zijn."}
                    />
                </div>  
                <div className="section vh-100">
                  <PersonContainer 
                    type="left" 
                    img="/img/marloes_portret.png" 
                    name="Ollie" 
                    backgroundSVG="Website-Achtergrond-marloes-roze.svg"
                    email="emma@stadslabzeist.nl" 
                    info={"Kantoorhond\n\nKnuffelkont / grappenmaker \nSuper goed in slapen, spelen, puberen, wandelen en lief zijn."}
                    />
                </div>  
                <div className="section vh-100">
                  <PersonContainer 
                    type="right" 
                    img="/img/emma_portret.png" 
                    name="Emma Fijma" 
                    email="emma@stadslabzeist.nl" 
                    backgroundSVG="Website-Achtergrond-emma-blauw.svg"
                    info={"Creatief leider\n\nKunstenaar / Grafisch ontwerper / maker \nSuper goed in creatieve denkprocessen, creatieve vertaling van projecten en opdrachten en structuur aanbrengen."}
                      textColor="#F0CFE5"
                    />
                </div>                
                <div className="section vh-100">
                  <DoeJeMee/>
                  <Footer show={fullpageIndex === 5}/>
                </div>                
              </div>
          );
        }}
      />      
    </Container>
  );
};

export default DitZijnWij;
