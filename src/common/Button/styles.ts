import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.backgroundColor || "rgb(24, 33, 109)"};
  color: ${(p) => (p.textColor || "#fff")};
  font-weight: 700;
  border: ${(p) => p.backgroundColor || "rgb(24, 33, 109)"};
  border-radius: 30px;
  padding: 13px 1rem;
  cursor: pointer;
  margin-top: 0.625rem;
  min-width: 120px;
  transition: all 0.3s ease-in-out;
  font-family: Neue Haas Bold;
  font-size: 15px;
  
  @media screen and (min-width: 992px) {
    font-size: 19px;
  }
  &:hover,
  &:active,
  &:focus {
    filter: brightness(80%);
  }
`;
