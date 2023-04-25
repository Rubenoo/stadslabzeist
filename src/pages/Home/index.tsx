import { lazy, useState } from "react";
import Results from "../../components/results/results";
import Samen from "./samen";
import Idee from "./idee";
import WieZijnWij from "./wiezijnwij";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../../components/Footer";
import Youtube from "./youtube";
import ZienWeJe from "./zienjewe";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ScrollToBottom = lazy(() => import("../../common/ScrollToBottom"));

const Home = () => {
  const [fullpageIndex, setFullpageIndex] = useState(0);

  return (
    <Container>
      <ScrollToTop show={fullpageIndex > 0} />
      <ScrollToBottom show={fullpageIndex === 0} />

      <ReactFullpage
        licenseKey={process.env.REACT_APP_FULLPAGE_KEY}
        scrollingSpeed={1000}
        scrollOverflow={false}
        normalScrollElements=".scrollable"
        onLeave={(origin, destination, direction) => {
          setFullpageIndex(destination.index);
        }}
        credits={{ enabled: false }}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <div id="fullpage-wrapper">
                <div className="section vh-100">
                  <Youtube />
                </div>
                <div className="section vh-100">
                  <Samen />
                </div>
                <div className="section vh-100">
                  <Idee />
                </div>
                <div className="section vh-100">
                  <MiddleBlock
                    title={""}
                    content={
                      <>
                        <Results />
                      </>
                    }
                    button={""}
                    fullWidth={true}
                    fullHeight={true}
                    id="doen"
                    backgroundColor="#5DC0E1"
                  />
                </div>
                <div className="section vh-100">
                  <WieZijnWij />
                </div>
                <div className="section vh-100">
                  <ZienWeJe />
                  <Footer show={fullpageIndex === 5} />
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
