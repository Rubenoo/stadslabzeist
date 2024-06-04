import { StyledButton } from "./styles";
import { ButtonProps } from "../types";
import { Link } from "react-router-dom";

export const Button = ({
  backgroundcolor,
  textcolor,
  fixedWidth,
  children,
  onClick,
  linkTo,
}: ButtonProps) => {
  if (linkTo)
    return (
      <Link to={linkTo}>
        <StyledButton
          backgroundcolor={backgroundcolor}
          textcolor={textcolor}
          fixedWidth={fixedWidth}
          onClick={onClick}
        >
          {children}
        </StyledButton>
      </Link>
    );
  return (
    <StyledButton
      backgroundcolor={backgroundcolor}
      textcolor={textcolor}
      fixedWidth={fixedWidth}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
