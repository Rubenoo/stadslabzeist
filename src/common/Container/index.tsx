import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({
  border,
  children,
  backgroundSVG,
  backgroundColor,
}: ContainerProps) => (
  <StyledContainer
    backgroundColor={backgroundColor}
    backgroundSVG={backgroundSVG}
    border={border}
  >
    {children}
  </StyledContainer>
);

export default Container;
