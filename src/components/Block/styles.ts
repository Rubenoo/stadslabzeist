import styled from "styled-components";

export const Content = styled("p")`
  margin-top: 1.5rem;
  white-space: pre-wrap;
  font-family: Neue Haas Medium;
  font-size: 16px;
  color: #fff;

  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`;
export const H6 = styled("h6")`
  margin-top: 1.5rem;
  font-family: Neue Haas Black;
  font-size: 59px;
  color: #fff;

  @media screen and (min-width: 992px) {
    font-size: 100px;
  }
`;

export const Container = styled("div")`
  position: relative;
  max-width: 700px;
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
`;
