import { lazy } from "react";
import { Button } from "../../common/Button";
import { P } from "./styles";
import { SecondContentContainer } from "../../components/MiddleBlock/styles";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Samen = () => {
  return (
      <ContentBlock
        type="right"
        title={""}
        content={<div >
                  <div className={"d-none d-lg-block"}>
                    <h1 style={{fontSize: "121px", color: "#1B3888"}}>SAMEN MAKEN WE DE STAD!</h1>
                  </div>
                  <div className={"d-lg-none d-block"}>
                    <h1 style={{fontSize: "40px", color: "#1B3888"}}>SAMEN MAKEN</h1>
                    <h1 style={{fontSize: "40px", color: "#1B3888"}}>WE DE STAD!</h1>
                  </div>
                </div>}
        secondContent={<SecondContentContainer top={"7vh"} className="h-100 d-flex flex-column align-items-start align-items-lg-end">
                        <P style={{color: "#1B3888"}}> 
                          Hallo! Welkom bij Stadslab Zeist. Ons doel is om van Zeist een inclusieve, creatieve en duurzame plaats te maken om te leven, zijn en ondernemen. Wij zijn een beweging van stadmakers. Een stadmaker is iemand die zich inzet om de stad nóg mooier te maken. En een stadmaker doet dat op geheel eigen wijze. Zo ontstaat creativiteit, nieuwsgierigheid en ruimte voor het experiment. Want ja, soms moet je eerst iets proberen, voordat je weet dat het eigenlijk anders moet. We leren dus door samen te experimenteren. Zo bouwen wij samen aan ons Zeist van de toekomst!
                        </P>
                        <div className="d-flex justify-content-end">
                          <Button linkTo="/stadslabzeist/hoe" backgroundColor={"#1B3888"} textColor={"#F8D13E"}>HOE</Button>
                        </div>
        </SecondContentContainer>}
        icon="product-launch.svg"
        id="samen"
        backgroundColor="#F8D13E"
      />
  );
};

export default Samen;
