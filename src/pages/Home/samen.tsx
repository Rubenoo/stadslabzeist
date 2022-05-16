import { lazy } from "react";
import { Button } from "../../common/Button";
import { P } from "../../components/ContentBlock/RightContentBlock/styles";
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
                    <h1 style={{fontSize: "59px", color: "#1B3888"}}>SAMEN MAKEN</h1>
                    <h1 style={{fontSize: "59px", color: "#1B3888"}}>WE DE STAD!</h1>
                  </div>
                </div>}
        secondContent={<SecondContentContainer top={"11.5vh"} className="h-100 d-flex flex-column align-items-start align-items-lg-end">
                        <P style={{color: "#1B3888"}}> 
                          Welkom bij Stadslab Zeist. Wij zijn een beweging
                          van stadmakers. Een stadmaker is iemand
                          die de plek waar hij of zij woont nóg beter wil
                          maken en die zich vanuit intrinsieke motivatie
                          inzet om verbindingen tussen mensen,
                          organisaties, perspectieven en ambities te
                          creëren. Ons doel is om van Zeist een inclusieve,
                          creatieve en duurzame plaats te maken om te leven,
                          zijn en ondernemen.
                        </P>
                        <div className="d-flex justify-content-end">
                          <Button backgroundColor={"#1B3888"} textColor={"#F8D13E"}>HOE</Button>
                        </div>
        </SecondContentContainer>}
        icon="product-launch.svg"
        id="samen"
        backgroundColor="#F8D13E"
      />
  );
};

export default Samen;
