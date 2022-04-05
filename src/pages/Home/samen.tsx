import { lazy } from "react";
import { Button } from "../../common/Button";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Samen = () => {
  return (
      <ContentBlock
        type="right"
        title={""}
        content={<div>
                    <h1>SAMEN MAKEN WE DE STAD!</h1>
                </div>}
        secondContent={<div>
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
                          <Button backgroundColor={"#1B3888"} textColor={"#F8D13E"}>HOE</Button>
                        </div>
        </div>}
        icon="product-launch.svg"
        id="hart"
        backgroundColor="yellow"
      />
  );
};

export default Samen;
