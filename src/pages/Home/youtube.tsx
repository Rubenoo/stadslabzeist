import { SvgIcon } from "../../common/SvgIcon";
import { AnimatedContainer } from "../../components/MiddleBlock/styles";

const Youtube = () => {
  return (
    <div
      className={"h-100 d-flex align-items-center"}
      style={{
        backgroundImage: "url(/img/svg/Website-Achtergrond-roze.svg)",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div className="ratio" style={{ aspectRatio: "91/36" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/f-aTBG3nx3k?autoplay=1&mute=1"
          title="YouTube video player"
          allow="autoplay"
        ></iframe>
      </div>
      <AnimatedContainer
        onClick={() => window.fullpage_api.moveSectionDown()}
        className="d-flex align-items-center justify-content-center"
      >
        <SvgIcon src="scroll-down.svg" width="80px" height="80px" />
      </AnimatedContainer>
    </div>
  );
};

export default Youtube;
