import { lazy, useState } from "react";
import Results from "../../components/results/results";
import Samen from "./samen";
import Idee from "./idee";
import WieZijnWij from "./wiezijnwij";
import DoMiBo from "./domibo";
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from "../../components/Footer";
import Youtube from "./youtube";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
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
                  <Youtube/>
                </div>
                <div className="section">
                  <Samen/>
                </div>
                <div className="section">
                  <Idee/>
                </div>
                <div className="section">
                  <MiddleBlock
                    title={""}
                    content={<>
                              <Results/>
                            </>}
                    button={"ZIN OM MEE TE DOEN?"}
                    fullWidth={true}
                    fullHeight={true}
                    id="doen"
                    backgroundColor="#5DC0E1"
                  />
                </div>
                <div className="section">
                  <WieZijnWij/>
                </div>
                <div className="section">
                  <DoMiBo/>
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

export default Home;
