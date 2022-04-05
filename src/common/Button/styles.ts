import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.backgroundColor || "rgb(24, 33, 109)"};
  color: ${(p) => (p.textColor || "#fff")};
  font-size: 16px;
  font-weight: 700;
  border: ${(p) => p.backgroundColor || "rgb(24, 33, 109)"};
  border-radius: 16px;
  padding: 13px 1rem;
  cursor: pointer;
  margin-top: 0.625rem;
  min-width: 120px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
  font-family: Neue Haas Bold;

  &:hover,
  &:active,
  &:focus {
    filter: brightness(80%);
  }
`;
