import { lazy } from "react";
import { SvgIcon } from "../../common/SvgIcon";
import { PhotoContainer } from "../../components/MiddleBlock/styles";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const WieZijnWij = () => {
  return (
    <MiddleBlock
    title={""}
    content={<PhotoContainer className="text-center">
                <img  loading='lazy' src="/img/wiezijnwij.png" style={{ height: '100vh', width: '100%', objectFit: 'cover',}} alt="wiezijnwij"></img>
                <div style={{ position: 'absolute' , top: '50%' , left: '50%', transform: 'translate(-50%, -50%)'}} >
                  <h1>WIE ZIJN WIJ</h1>
                  <SvgIcon src="wiezijnwij.svg" width="70%" height="70%"/>
                </div>
            </PhotoContainer>
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
