import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ name, placeholder, onChange, value }: InputProps) => (
  <StyledContainer>
    <Label htmlFor={name}>{name}</Label>
    <StyledTextArea
      placeholder={placeholder}
      id={name}
      name={name}
      onChange={onChange}
      value={value}
    />
  </StyledContainer>
);

export default TextArea;
