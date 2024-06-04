import { lazy } from "react";
import { Button } from "../../common/Button";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const DoeJeMee = () => {
  return (
    <MiddleBlock
      title={""}
      content={
        <>
          <div className={"d-none d-lg-block text-start"}>
            <h1 style={{ fontSize: "110px" }}>DOE JE MEE? </h1>
          </div>
          <div className={"d-lg-none d-block text-start"}>
            <h1 style={{ fontSize: "55px" }}>DOE JE</h1>
            <h1 style={{ fontSize: "55px" }}>MEE</h1>
          </div>
          <div
            className={"d-flex justify-content-end mt-0 mt-lg-5 pt-0 pt-lg-5"}
          >
            <Button
              linkTo="/zienwejedan"
              backgroundcolor={"#E4E4E4"}
              textcolor={"#e30613"}
            >
              WE ZIEN JE GRAAG!
            </Button>
          </div>
        </>
      }
      id="doejemee"
      backgroundsvg="Website-Achtergrond-rood.svg"
      fullwidth={true}
      fullHeight={true}
      button={""}
    />
  );
};

export default DoeJeMee;
