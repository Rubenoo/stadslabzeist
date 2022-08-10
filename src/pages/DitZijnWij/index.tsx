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
                <div className="section vh-100">
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
                <div className="section vh-100">
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
                <div className="section vh-100">
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
