import { lazy } from "react";
import { Image } from "antd";
import { SvgIcon } from "../../common/SvgIcon";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const WieZijnWij = () => {
  return (
    <MiddleBlock
    title={""}
    content={<div className="position-relative text-center">
                <img className={'d-none d-lg-block'} loading='lazy' src="/img/wiezijnwij.png" style={{ height: '1200px' , width: '100%', objectFit: 'cover',}} alt="wiezijnwij"></img>
                <img className={'d-lg-none d-block'} loading='lazy' src="/img/wiezijnwij.png" style={{ height: '800px' , width: '100%', objectFit: 'cover',}} alt="wiezijnwij"></img>
                <div style={{ position: 'absolute' , top: '50%' , left: '50%', transform: 'translate(-50%, -50%)'}} >
                <h1 className="text-white">WIE ZIJN WIJ</h1>
                <SvgIcon src="wiezijnwij.svg" width="70%" height="70%"/>
                </div>
            </div>
            }
    button={""}
    fullWidth={true}
    fullHeight={true}
    fullBackground={true}
    id="wiezijnwij"
    backgroundColor="#5DC0E1"
  />
  );
};

export default WieZijnWij;
//              <img loading='lazy' src="/img/wiezijnwij.png" style={{ backgroundRepeat: 'repeat-x', height: '100%', width: '100%', }} alt="smiley"></img
//              <Image className={"img-fluid background-position-center"} preview={false} loading="lazy" src="/img/wiezijnwij.png" alt="Wie zijn wij" title="Wie zijn wij"/>
