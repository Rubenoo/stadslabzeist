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
  const [resetFullPage, setResetFullPage] = useState(false);
  return (
    <Container>
      <ScrollToTop onClick={() => setResetFullPage(true)} show={fullpageIndex > 0}/>
      <ReactFullpage   
          licenseKey={'8N0K9-BXM78-CKADI-YNQJ9-VEXHK'}
          scrollingSpeed = {1000}
          onLeave={(origin, destination, direction) => {
            setFullpageIndex(destination.index);
          }}
          render={({ state, fullpageApi }) => {
            if (resetFullPage) {
              fullpageApi.moveTo(1, 0);
              setResetFullPage(false);
            }
            return (
            <>
              <div id="fullpage-wrapper">
                <div className="section">
                  <DitZijnWijBlock/>
                </div>   
                <div className="section">
                  <PersonContainer 
                    type="right" 
                    img="/img/saskia_portret.png" 
                    name="Saskia"
                    backgroundSVG="Website-Achtergrond-saskia-rood.svg"
                    email="Saskia@stadslabzeist.nl" 
                    info="Marloes van Haaren is
                      project- en programmamanager
                      voor het Stadslab. Marloes van
                      Haaren is project- en
                      programmamanager
                      voor het Stadslab. Marloes van
                      Haaren is project- en
                      programmamanager
                      voor het Stadslab. (Wordt
                      aangevuld!)"
                      textColor="#F0CFE5"
                    />
                </div>
                <div className="section">
                  <PersonContainer 
                    type="left" 
                    img="/img/merel_portret.png" 
                    name="Merel" 
                    email="Merel@stadslabzeist.nl"
                    backgroundSVG="Website-Achtergrond-merel-blauw.svg"
                    info="Marloes van Haaren is
                      project- en programmamanager
                      voor het Stadslab. Marloes van
                      Haaren is project- en
                      programmamanager
                      voor het Stadslab. Marloes van
                      Haaren is project- en
                      programmamanager
                      voor het Stadslab. (Wordt
                      aangevuld!)"
                    />
                </div>
                <div className="section">
                  <PersonContainer 
                    type="right" 
                    img="/img/emma_portret.png" 
                    name="Emma" 
                    email="Emma@stadslabzeist.nl" 
                    backgroundSVG="Website-Achtergrond-emma-blauw.svg"
                    info="Marloes van Haaren is
                      project- en programmamanager
                      voor het Stadslab. Marloes van
                      Haaren is project- en
                      programmamanager
                      voor het Stadslab. Marloes van
                      Haaren is project- en
                      programmamanager
                      voor het Stadslab. (Wordt
                      aangevuld!)"
                      textColor="#F0CFE5"
                    />
                </div>
                <div className="section">
                  <PersonContainer 
                    type="left" 
                    img="/img/marloes_portret.png" 
                    name="Marloes" 
                    backgroundSVG="Website-Achtergrond-marloes-roze.svg"
                    email="Marloes@stadslabzeist.nl" 
                    info="Marloes van Haaren is
                      project- en programmamanager
                      voor het Stadslab. Marloes van
                      Haaren is project- en
                      programmamanager
                      voor het Stadslab. Marloes van
                      Haaren is project- en
                      programmamanager
                      voor het Stadslab. (Wordt
                      aangevuld!)"
                    />
                </div>                
                <div className="section">
                  <DoeJeMee/>
                </div>                
              </div>
            </>
          );
        }}
      />      
    <Footer show={fullpageIndex === 5}/>
    </Container>
  );
};

export default DitZijnWij;
