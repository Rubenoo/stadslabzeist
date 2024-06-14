import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({
  border,
  children,
  backgroundsvg,
  backgroundcolor,
  className,
}: ContainerProps) => (
  <StyledContainer
    backgroundcolor={backgroundcolor}
    backgroundsvg={backgroundsvg}
    border={border}
    className={className}
  >
    {children}
  </StyledContainer>
);

export default Container;
