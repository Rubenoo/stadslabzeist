import { lazy } from "react";
import { Button } from "../../common/Button";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const VrijMiBo = () => {
  return (
      <MiddleBlock
        title={""}
        content={<div className="d-flex h-100 w-100 align-items-center justify-content-center">
                  <h1 style={{color: "RGBA(240, 207,229,1)"}}>ZIEN WE JE OP DE VRIJMIBO?</h1>
                </div>}
        id="idee"
        backgroundSVG="Website-Achtergrond-rood.svg"
        fullWidth={true}
        fullHeight={true}
        button={''}
      />
  );
};

export default VrijMiBo;
