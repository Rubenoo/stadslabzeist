import { lazy } from "react";
import { H } from "./styles";
import partners from "../../content/Partners.json";
import PartnersCarousel from "../Hoe/PartnersCarousel";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const OnzePartners = () => {
  return (
    <MiddleBlock
      title={""}
      content={
        <>
          <H>
            ONZE
            <br />
            PARTNERS
          </H>
          <PartnersCarousel partners={partners} />
        </>
      }
      id="idee"
      backgroundSVG="Website-Achtergrond-roze-wit.svg"
      button={""}
    />
  );
};

export default OnzePartners;
