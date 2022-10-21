import { lazy } from "react";
import { Button } from "../../common/Button";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const ZienWeJe = () => {
  return (
      <MiddleBlock
        title={""}
        content={<>
          <div className={"d-none d-lg-block text-start"}>
            <h1 style={{fontSize: "110px"}}>ZIEN WE JE </h1>
            <h1 style={{fontSize: "110px"}}>BIJ DE KOFFIE</h1>
            <h1 style={{fontSize: "110px"}}>MET STADMAKERS?</h1>

          </div>
          <div className={"d-lg-none d-block text-start"}>
            <h1 style={{fontSize: "55px",}}>ZIEN WE JE </h1>
            <h1 style={{fontSize: "55px"}}>BIJ DE KOFFIE</h1>
            <h1 style={{fontSize: "55px",}}>MET STADMAKERS?</h1>
          </div>
          <div className={"d-flex justify-content-end mt-0 mt-lg-5 pt-0 pt-lg-5"}>
            <Button backgroundColor={"#E4E4E4"} textColor={"#e30613"}>JA</Button>
          </div>
        </>}
        id="domibo"
        backgroundSVG="Website-Achtergrond-rood.svg"
        fullWidth={true}
        fullHeight={true}
        button={''}
      />
  );
};

export default ZienWeJe;
