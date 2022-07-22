import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, children, backgroundSVG }: ContainerProps) => (
  <StyledContainer backgroundSVG={backgroundSVG} border={border}>{children}</StyledContainer>
);

export default Container;
