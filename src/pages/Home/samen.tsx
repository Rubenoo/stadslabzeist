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
import { Row, Image, Col } from 'antd';
import { Content } from "antd/lib/layout/layout";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Samen = () => {
  return (
      <ContentBlock
        type="right"
        title={""}
        content={<>
                  <Row justify="center">
                    <h1>SAMEN MAKEN WE DE STAD!</h1>
                  </Row>                  
                </>}
        secondContent={<div className="p-4">
                        <p>
                          Welkom bij Stadslab Zeist. Wij zijn een beweging
                          van stadmakers. Een stadmaker is iemand
                          die de plek waar hij of zij woont nóg beter wil
                          maken en die zich vanuit intrinsieke motivatie
                          inzet om verbindingen tussen mensen,
                          organisaties, perspectieven en ambities te
                          creëren. Ons doel is om van Zeist een inclusieve,
                          creatieve en duurzame plaats te maken om te leven,
                          zijn en ondernemen.
                        </p>
                        <div className="d-flex justify-content-end">
                          <Button>HOE</Button>
                        </div>
        </div>}
        icon="product-launch.svg"
        id="hart"
        backgroundColor="yellow"
      />
  );
};

export default Samen;
