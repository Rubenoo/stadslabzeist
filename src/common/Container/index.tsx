import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({
  border,
  children,
  backgroundsvg,
  backgroundcolor,
}: ContainerProps) => (
  <StyledContainer
    backgroundcolor={backgroundcolor}
    backgroundsvg={backgroundsvg}
    border={border}
  >
    {children}
  </StyledContainer>
);

export default Container;
