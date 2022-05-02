import { lazy } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ContactContent from "../../content/ContactContent.json";
import HalloContent from "../../content/HalloContent.json";
import HoeContent from "../../content/HoeContent.json";
import OveronsContent from "../../content/OveronsContent.json";
import Results from "../../components/results/results";
import Samen from "./samen";
import Idee from "./idee";
import WieZijnWij from "./wiezijnwij";
import VrijMiBo from "./vrijmibo";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <div className="ratio ratio-21x9" id="intro">
        <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/f-aTBG3nx3k?autoplay=1&mute=1" title="YouTube video player" allow="autoplay"></iframe>
      </div>      
      <Samen/>
      <Idee/>
      <MiddleBlock
        title={"Onze resultaten"}
        content={<>
                  <Results/>
                </>}
        button={"ZIN OM MEE TE DOEN?"}
        fullWidth={true}
        fullHeight={true}
        id="resultaten"
        backgroundColor="#5DC0E1"
      />
      <WieZijnWij/>
      
     <VrijMiBo/>
    </Container>
  );
};

export default Home;
//<div className='img-fluid' style={{ backgroundImage: 'url(/img/smiley.gif)', backgroundRepeat: 'repeat-x', height: '539px', width: '100%'}}>
//</div>
/*
<MiddleBlock
      title={""}
      content={<div>
                <img loading='lazy' src="/img/smiley.gif" style={{ backgroundRepeat: 'repeat-x', height: '539px', width: '100%', }} alt="smiley"></img>
              </div>
              }
      button={""}
      fullWidth={true}
      fullHeight={true}
      id="smiley"
      backgroundColor="#5DC0E1"
      />
*/