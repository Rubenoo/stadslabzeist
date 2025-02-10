import { SvgIcon } from "../../common/SvgIcon";
import { AnimatedContainer } from "../../components/MiddleBlock/styles";
import { H1DZW } from "../../components/results/styles";

const DitZijnWijBlock = () => {
  return (
    <div className="text-center position-relative">
      <img
        loading="lazy"
        src="/img/ditzijnwij.jpeg"
        style={{ height: "100vh", width: "100%", objectFit: "cover" }}
        alt="wiezijnwij"
      ></img>
      <img
        loading="lazy"
        src="/img/svg/Website-Achtergrond-blauw-transparant.svg"
        style={{
          height: "160vh",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
        }}
        alt="wiezijnwij"
      ></img>
      <div
        className={"d-flex flex-column text-nowrap align-items-start"}
        style={{
          position: "absolute",
          top: "65%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <H1DZW>DIT ZIJN WIJ</H1DZW>
        <AnimatedContainer
          style={{ bottom: "-150%", zIndex: 0 }}
          onClick={() => window.fullpage_api.moveSectionDown()}
          className="d-flex align-items-center justify-content-center"
        >
          <SvgIcon src="scroll-down-white.svg" width="80px" height="80px" />
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default DitZijnWijBlock;
