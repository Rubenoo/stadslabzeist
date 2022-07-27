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

  return (
    <Container>
      <ScrollToTop show={fullpageIndex > 0}/>
      <ReactFullpage   
          licenseKey={'8N0K9-BXM78-CKADI-YNQJ9-VEXHK'}
          scrollingSpeed = {1000}
          onLeave={(origin, destination, direction) => {
            setFullpageIndex(destination.index);
          }}
          render={({ state, fullpageApi }) => {
            return (
            <>
              <div id="fullpage-wrapper">             
                <div className="section vh-100" >
                  <Youtube/>
                </div>
                <div className="section vh-100">
                  <Samen/>
                </div>
                <div className="section vh-100">
                  <Idee/>
                </div>
                <div className="section vh-100">
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
                <div className="section vh-100">
                  <WieZijnWij/>
                </div>
                <div className="section vh-100">
                  <DoMiBo/>
                  <Footer absulute={false} show={true}/>
                </div>               
              </div>
            </>
          );
        }}
      />
    </Container>    
  );
};

export default Home;
