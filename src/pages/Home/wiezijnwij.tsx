import { Link } from "react-router-dom";
import { SvgIcon } from "../../common/SvgIcon";
import { H1WZW } from "../../components/results/styles";
import { AttentionSeeker } from "react-awesome-reveal";

const WieZijnWij = () => {
  return (
    <div className="text-center">
      <img
        className={"d-none d-lg-block"}
        loading="lazy"
        src="/img/teamfoto_desktop.jpg"
        style={{ height: "100vh", width: "100%", objectFit: "cover" }}
        alt="wiezijnwij"
      ></img>
      <img
        className={"d-block d-lg-none"}
        loading="lazy"
        src="/img/teamfoto_mobiel.jpg"
        style={{ height: "100vh", width: "100%", objectFit: "cover" }}
        alt="wiezijnwij"
      ></img>
      <Link
        onClick={() => window.fullpage_api.moveTo(1)}
        to="/ditzijnwij"
        className={"d-flex flex-column align-items-start"}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <H1WZW>WIE</H1WZW>
        <H1WZW>ZIJN</H1WZW>
        <H1WZW>WIJ</H1WZW>
        <AttentionSeeker
          delay={500}
          triggerOnce={false}
          effect={"bounce"}
          className={"d-flex align-self-center pt-2 pt-lg-1 w-100 h-100"}
        >
          <SvgIcon src="wiezijnwij.svg" width="100%" height="100%" />
        </AttentionSeeker>
      </Link>
    </div>
  );
};

export default WieZijnWij;
