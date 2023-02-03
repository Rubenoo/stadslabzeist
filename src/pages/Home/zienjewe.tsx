import { lazy } from "react";
import { Button } from "../../common/Button";
import {H} from "./styles";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const ZienWeJe = () => {
  return (
      <MiddleBlock
        title={""}
        content={<>
            <H>ZIEN WE JE</H>
            <H>BIJ DE KOFFIE</H>
            <H>MET STADMAKERS?</H>
          <div className={"d-flex justify-content-end mt-0 mt-lg-5 pt-0 pt-lg-5"}>
            <Button linkTo="/zienwejedan" backgroundColor={"#E4E4E4"} textColor={"#e30613"}>JA</Button>
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
