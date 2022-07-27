import { StyledButton } from "./styles";
import { ButtonProps } from "../types";
import { Link } from "react-router-dom";

export const Button = ({
  backgroundColor,
  textColor,
  fixedWidth,
  children,
  onClick,
  linkTo,
}: ButtonProps) => {
  if(linkTo) return (
    <Link to={linkTo}>
      <StyledButton backgroundColor={backgroundColor} textColor={textColor} fixedWidth={fixedWidth} onClick={onClick}>
        {children}
      </StyledButton>
    </Link>
  )
  return (
    <StyledButton backgroundColor={backgroundColor} textColor={textColor} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
    </StyledButton>
  )
  }
;
