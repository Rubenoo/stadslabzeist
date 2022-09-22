import { lazy } from "react";
import { Button } from "../../common/Button";
import { SecondContentContainer } from "../../components/MiddleBlock/styles";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Idee = () => {
  return (
      <ContentBlock
        type="right"
        title={""}
        content={<>
                  <div className={"d-none d-lg-block"}>
                    <h1 style={{fontSize: "173px"}} className={"text-nowrap"}>HEB JIJ</h1>
                    <h1 style={{fontSize: "173px"}} className={"text-nowrap"}>EEN IDEE?</h1>
                  </div>
                  <div className={"d-lg-none d-block"}>
                    <h1 style={{fontSize: "63px"}} className={"text-nowrap"}>HEB JIJ</h1>
                    <h1 style={{fontSize: "63px"}} className={"text-nowrap"}>EEN IDEE?</h1>
                  </div>
                </>}
        secondContent={
                        <SecondContentContainer top="25vh" className="d-flex justify-content-end align-items-end pt-sm-5 pt-0">
                          <Button linkTo={"/zienwejedan"} backgroundColor={"#E4E4E4"} textColor={"#1B3888"}>JA IK HEB EEN IDEE!</Button>
                        </SecondContentContainer>
                      }
        icon="Website-Achtergrond-blauw.svg"
        id="idee"
        backgroundSVG="Website-Achtergrond-blauw.svg"
        fadeRight={true}
      />
  );
};

export default Idee;
