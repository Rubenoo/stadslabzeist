import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  backgroundColor,
  textColor,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton backgroundColor={backgroundColor} textColor={textColor} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);
