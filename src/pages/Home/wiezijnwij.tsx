import { Link } from "react-router-dom";
import { SvgIcon } from "../../common/SvgIcon";
import { H1WZW } from "../../components/results/styles";

const WieZijnWij = () => {
  return (
    <div className="text-center">
      <img loading='lazy' src="/stadslabzeist/img/wiezijnwij.jpg" style={{ height: '100vh', width: '100%', objectFit: 'cover',}} alt="wiezijnwij"></img>
      <Link onClick={() => window.fullpage_api.moveTo(1)} to="/stadslabzeist/ditzijnwij" className={"d-flex flex-column align-items-start"} style={{ position: 'absolute' , top: '50%' , left: '50%', transform: 'translate(-50%, -50%)'}} >
        <H1WZW>WIE</H1WZW>
        <H1WZW>ZIJN</H1WZW>
        <H1WZW>WIJ</H1WZW>
        <SvgIcon className={"d-flex align-self-center pt-2 pt-lg-1"} src="wiezijnwij.svg" width="100%" height="100%"/>
      </Link>
    </div>            
  );
};

export default WieZijnWij;
