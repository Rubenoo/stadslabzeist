import { SvgIcon } from "../SvgIcon";
import { ScrollUpContainer } from "./styles";

const ScrollToTop = (props: any) => {  
  return (
    <ScrollUpContainer onClick={() => window.fullpage_api.moveTo(1)} show={props.show}>
      <SvgIcon src="scroll-top.svg" width="20px" height="20px" />
    </ScrollUpContainer>
  );
};

export default ScrollToTop;
