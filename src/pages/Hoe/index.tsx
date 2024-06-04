import { lazy, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../../components/Footer";
import HoeDoenWijDat from "./HoeDoenWijDat";
import VoorWie from "./VoorWie";
import Toolbox from "./Toolbox";
import OnzePartners from "./OnzePartners";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  const [fullpageIndex, setFullpageIndex] = useState(0);

  return (
    <Container>
      <ScrollToTop show={fullpageIndex > 0} />
      <ReactFullpage
        licenseKey={import.meta.env.VITE_APP_FULLPAGE_KEY}
        scrollingSpeed={1000}
        scrollOverflow={false}
        scrollBar={false}
        normalScrollElements=".scrollable"
        onLeave={(destination) => {
          setFullpageIndex(destination.index);
        }}
        credits={{ enabled: false }}
        render={() => {
          return (
            <>
              <div id="fullpage-wrapper">
                <div className="section vh-100">
                  <HoeDoenWijDat />
                </div>
                <div className="section vh-100">
                  <VoorWie />
                </div>
                <div className="section vh-100">
                  <Toolbox />
                </div>
                <div className="section vh-100">
                  <OnzePartners />
                  <Footer show={fullpageIndex === 3} />
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
