import { SvgIcon } from "../SvgIcon";
import { ScrollDownContainer } from "./styles";

const ScrollToBottom = (props: any) => {
  return (
    <ScrollDownContainer onClick={() => window.fullpage_api.moveTo(6)} show={props.show}>
      <SvgIcon src="scroll-down-double.svg" width="20px" height="20px" />
    </ScrollDownContainer>
  );
};

export default ScrollToBottom;
