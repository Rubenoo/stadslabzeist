import { Divider } from "antd";
import { lazy } from "react";
import { SvgIcon } from "../../common/SvgIcon";
import { AnimatedContainer } from "../../components/MiddleBlock/styles";
import { H1 } from "../../components/results/styles";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const DitZijnWijBlock = () => {
  return (
      <MiddleBlock
        title={""}
        content={
        <>
          <div className={"d-none d-lg-block text-start"}>
            <H1 style={{fontSize: "110px"}}>DIT ZIJN</H1>
            <H1 style={{fontSize: "110px"}}>WIJ</H1>
          </div>
          <div className={"d-lg-none d-block text-start"}>
            <H1 style={{fontSize: "55px",}}>DIT</H1>
            <H1 style={{fontSize: "55px"}}>ZIJN</H1>
            <H1 style={{fontSize: "55px"}}>WIJ</H1>
          </div>
          <Divider className={"my-lg-5 my-3"} style={{ borderTop: "1px solid #1B3888" }} />
          <AnimatedContainer onClick={() => window.fullpage_api.moveTo(2, 0)} className="d-flex align-items-center justify-content-center">
            <SvgIcon src="scroll-down.svg" width="80px" height="80px" />
          </AnimatedContainer>
        </>
      }
        id="doejemee"
        backgroundSVG="Website-Achtergrond-roze.svg"
        fullWidth={true}
        fullHeight={true}
        button={''}
      />
  );
};

export default DitZijnWijBlock;
