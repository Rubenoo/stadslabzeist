import { lazy } from "react";
import { Button } from "../../common/Button";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Idee = () => {
  return (
      <ContentBlock
        type="right"
        title={""}
        content={<div>
                  <h1 className={"text-white"}>HEB JIJ EEN IDEE?</h1>
                </div>}
        secondContent={
                        <div className="d-flex justify-content-end pt-sm-5 pt-0">
                          <Button backgroundColor={"#fff"} textColor={"#1B3888"}>JA IK HEB EEN IDEE!</Button>
                        </div>
                      }
        icon="Website-Achtergrond-blauw.svg"
        id="idee"
        backgroundSVG="Website-Achtergrond-blauw.svg"
        fadeRight={true}
      />
  );
};

export default Idee;
