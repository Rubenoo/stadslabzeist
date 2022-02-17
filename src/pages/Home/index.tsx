import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import HalloContent from "../../content/HalloContent.json";
import HoeContent from "../../content/HoeContent.json";
import OveronsContent from "../../content/OveronsContent.json";
import Results from "../../components/results/results";
import { Button } from "../../common/Button";
import { Row, Image } from 'antd';

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <iframe width="100%" height="431px" src="https://www.youtube.com/embed/f-aTBG3nx3k?autoplay=1&mute=1" title="YouTube video player" allow="autoplay"></iframe>
      <ContentBlock
        type="right"
        title={"‘WIE WIL JIJ EEN HART ONDER DE RIEM STEKEN?’"}
        content={<>
                  <Row justify="center">
                    HART VOOR ZEIST:  JANUARI T/M 9 FEBRUARI 2021
                  </Row>
                  <Row justify="center">
                    <Button>BEKIJK HIER HET PROJECT</Button>
                  </Row>
                </>}
        secondContent={<>
            <Image height={"100%"} src="https://stadslabzeist.nl/wordpress/wp-content/uploads/2021/01/sidebar-stock0hart.jpg" /> 
        </>}
        icon="product-launch.svg"
        id="hart"
      />
      <ContentBlock
        type="left"
        title={HalloContent.title}
        content={HalloContent.text}
        icon="waving.svg"
        id="introductie"
      />
      <ContentBlock
        type="right"
        title={HoeContent.title}
        content={HoeContent.text}
        icon="waving.svg"
        id="hoe"
      />
      <ContentBlock
        type="left"
        title={OveronsContent.title}
        content={OveronsContent.text}
        icon="waving.svg"
        id="overons"
        button={OveronsContent.button}
      />
      <MiddleBlock
        title={"Onze resultaten"}
        content={<>
                  <Results/>
                </>}
        button={""}
        fullWidth={true}
        id="resultaten"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={"roadmap"}
        id="roadmap"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
