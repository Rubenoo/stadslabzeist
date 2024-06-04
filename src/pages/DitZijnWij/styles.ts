import styled from "styled-components";

export const A = styled("a")<{ textcolor?: string }>`
  font-size: 17px;
  font-family: Neue Haas Bold;
  color: #e4e4e4;

  @media screen and (min-width: 992px) {
    font-size: 29px;
  }
`;
export const P = styled("p")<{ textcolor?: string }>`
  font-size: 16px;
  white-space: pre-wrap;
  font-family: Neue Haas Medium;
  color: #e4e4e4;

  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`;
